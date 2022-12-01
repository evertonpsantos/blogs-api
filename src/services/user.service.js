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
  return { type: '', message: foundUser };
};

module.exports = {
  createNewUser,
  findUserById,
};