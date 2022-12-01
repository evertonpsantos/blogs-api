const { loginRequestSchema } = require('./schemas');

const validateLoginRequest = (req, res, next) => {
  const loginRequest = req.body;

  const { error } = loginRequestSchema.validate(loginRequest);

  if (error) {
    return res.status(400).json({ message: error.details[0].message });
  }

  next();
};

module.exports = {
  validateLoginRequest,
};