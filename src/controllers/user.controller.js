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

const findUserById = async (req, res) => {
  const userId = req.params.id;
  const foundUser = await userService.findUserById(userId);
  if (foundUser.type) return res.status(404).json({ message: foundUser.message });
  return res.status(200).json(foundUser.message);
};

module.exports = {
  createNewUser,
  getAllUsers,
  findUserById,
};