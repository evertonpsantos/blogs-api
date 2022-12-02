const Joi = require('joi');

const requiredError = 'Some required fields are missing';

const loginRequestSchema = Joi.object({
  email: Joi.string().required(),
  password: Joi.string().required(),
}).required().messages({
  'string.empty': requiredError,
  'any.required': requiredError,
});

const newUserRequestSchema = Joi.object({
  displayName: Joi.string().min(8).required(),
  email: Joi.string().email().required(),
  password: Joi.string().min(6).required(),
  image: Joi.string(),
}).messages({
  'string.empty': requiredError,
  'any.required': requiredError,
  'string.min': '{#label} length must be at least {#limit} characters long',
  'string.email': '{#label} must be a valid email',
});

const newCategorySchema = Joi.object({
  name: Joi.string().required().messages({
    'string.empty': '{#label} is required',
    'any.required': '{#label} is required',
  }),
});

const newPostSchema = Joi.object({
  title: Joi.string().required(),
  content: Joi.string().required(),
  categoryIds: Joi.array().items(Joi.number()).min(1),
}).messages({
  'string.empty': requiredError,
  'any.required': requiredError,
  'array.min': requiredError,
});

module.exports = {
  loginRequestSchema,
  newUserRequestSchema,
  newCategorySchema,
  newPostSchema,
};