const { User } = require('../models');

const createNewUser = async (newUser) => {
  const [foundUser] = await User.findAll({
    where: { email: newUser.email },
  });
  if (foundUser) return { type: 'USER_ALREADY_EXISTS', message: 'User already registered' };
  const registeredUser = await User.create({ ...newUser });
  return { type: '', message: registeredUser };
};

const findUserById = async (userId) => {
  const foundUser = await User.findByPk(userId);
  if (!foundUser) return { type: 'USER_NOT_FOUND', message: 'User does not exist' };
  foundUser.password = undefined;
  return { type: '', message: foundUser };
};

const getAllUsers = async () => {
  const userList = await User.findAll();
  const mappedUserList = userList
    .map(({ id, displayName, email, image }) => ({ id, displayName, email, image }));
  return { type: '', message: mappedUserList };
};

module.exports = {
  createNewUser,
  findUserById,
  getAllUsers,
};