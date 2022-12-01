const { loginRequestSchema, newUserRequestSchema } = require('./schemas');

const validateLoginRequest = (req, res, next) => {
  const loginRequest = req.body;

  const { error } = loginRequestSchema.validate(loginRequest);

  if (error) {
    return res.status(400).json({ message: error.details[0].message });
  }

  next();
};

const validateNewUserRequest = (req, res, next) => {
  const newUser = req.body;

  const { error } = newUserRequestSchema.validate(newUser);
  if (error) {
    return res.status(400).json({ message: error.details[0].message });
  }

  next();
};

module.exports = {
  validateLoginRequest,
  validateNewUserRequest,
};