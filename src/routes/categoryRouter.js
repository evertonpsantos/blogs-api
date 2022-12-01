const express = require('express');
const { validateToken } = require('../auth/validateJWT');
const { createNewCategory } = require('../controllers/category.controller');
const { validateNewCategory } = require('../middlewares/validations');

const categoryRouter = express.Router();

categoryRouter.post('/', validateToken, validateNewCategory, createNewCategory);

module.exports = categoryRouter;