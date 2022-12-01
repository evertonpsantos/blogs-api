const { User } = require('../models');

const loginRequest = async ({ email }) => {
  const [user] = await User.findAll({
    where: { email },
  });

  if (!user) return { type: 'NOT_FOUND', message: 'Invalid fields' };
  return { type: '', message: user };
};

module.exports = {
  loginRequest,
};