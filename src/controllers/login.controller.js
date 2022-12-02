const { createToken } = require('../auth/validateJWT');
const loginService = require('../services/login.service');

const loginRequest = async (req, res) => {
  const newRequest = req.body;
  const user = await loginService.loginRequest(newRequest);
  if (user.type) return res.status(400).json({ message: user.message });
  const token = createToken(user.message);
  res.status(200).json({ token });
};

module.exports = {
  loginRequest,
};