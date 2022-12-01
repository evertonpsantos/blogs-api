const { createToken } = require('../auth/validateJWT');
const userService = require('../services/user.service');

const createNewUser = async (req, res) => {
  const newUser = req.body;

  const registeredUser = await userService.createNewUser(newUser);
  if (registeredUser.type) return res.status(409).json({ message: registeredUser.message });
  const token = createToken(registeredUser.message);
  return res.status(201).json({ token });
};

const getAllUsers = async (_req, res) => {
  const { message } = await userService.getAllUsers();
  return res.status(200).json(message);
};

module.exports = {
  createNewUser,
  getAllUsers,
};