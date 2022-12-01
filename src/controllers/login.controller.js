require('dotenv/config');
const jwt = require('jsonwebtoken');
const loginService = require('../services/login.service');

const secret = process.env.JWT_SECRET;

const jwtConfig = {
  expiresIn: '1d',
  algorithm: 'HS256',
};

const loginRequest = async (req, res) => {
  const newRequest = req.body;
  const user = await loginService.loginRequest(newRequest);
  if (user.type) return res.status(400).json({ message: user.message });
  const token = jwt.sign({ data: { userId: user.id } }, secret, jwtConfig);
  res.status(200).json({ token });
};

module.exports = {
  loginRequest,
};