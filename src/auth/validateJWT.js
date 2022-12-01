require('dotenv/config');
const jwt = require('jsonwebtoken');

const secret = process.env.JWT_SECRET;

const jwtConfig = {
  expiresIn: '1d',
  algorithm: 'HS256',
};

const createToken = (user) => {
  const token = jwt.sign({ data: { userId: user.id } }, secret, jwtConfig);
  return token;
};

module.exports = {
  createToken,
};