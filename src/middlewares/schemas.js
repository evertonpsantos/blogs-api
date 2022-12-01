const Joi = require('joi');

const loginRequestSchema = Joi.object({
  email: Joi.string().required(),
  password: Joi.string().required(),
}).required().messages({
  'string.empty': 'Some required fields are missing',
  'any.required': 'Some required fields are missing',
});

const newUserRequestSchema = Joi.object({
  displayName: Joi.string().min(8).required(),
  email: Joi.string().email().required(),
  password: Joi.string().min(6).required(),
  image: Joi.string(),
}).messages({
  'string.empty': 'Some required fields are missing',
  'any.required': 'Some required fields are missing',
  'string.min': '{#label} length must be at least {#limit} characters long',
  'string.email': '{#label} must be a valid email',
});

const newCategorySchema = Joi.object({
  name: Joi.string().required().messages({
    'string.empty': '{#label} is required',
    'any.required': '{#label} is required',
  }),
});

module.exports = {
  loginRequestSchema,
  newUserRequestSchema,
  newCategorySchema,
};