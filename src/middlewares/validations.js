const { loginRequestSchema, newUserRequestSchema, newCategorySchema, 
  newPostSchema } = require('./schemas');

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

const validateNewCategory = (req, res, next) => {
  const newCategory = req.body;

  const { error } = newCategorySchema.validate(newCategory);
  if (error) return res.status(400).json({ message: error.details[0].message });
  next();
};

const validateNewPost = (req, res, next) => {
  const newPost = req.body;

  const { error } = newPostSchema.validate(newPost);
  if (error) return res.status(400).json({ message: error.details[0].message });
  next();
};

module.exports = {
  validateLoginRequest,
  validateNewUserRequest,
  validateNewCategory,
  validateNewPost,
};