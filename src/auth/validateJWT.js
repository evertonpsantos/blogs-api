require('dotenv/config');
const jwt = require('jsonwebtoken');
const userService = require('../services/user.service');

const secret = process.env.JWT_SECRET;

const jwtConfig = {
  expiresIn: '1d',
  algorithm: 'HS256',
};

const createToken = (user) => {
  const token = jwt.sign({ data: { userId: user.id } }, secret, jwtConfig);
  return token;
};

const validateToken = async (req, res, next) => {
  const token = req.header('Authorization');
  if (!token) return res.status(401).json({ message: 'Token not found' });

  try {
    const verifiedToken = jwt.verify(token, secret);
    const tokenUser = await userService.findUserById(verifiedToken.data.userId);
    if (!tokenUser) {
      return res.status(401).json({ message: 'Expired or invalid token' });
    }
    req.user = tokenUser;
    next();
  } catch (error) {
    return res.status(401).json({ message: 'Expired or invalid token' });
  }
};

module.exports = {
  createToken,
  validateToken,
};