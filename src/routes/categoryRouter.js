const express = require('express');
const { validateToken } = require('../auth/validateJWT');
const { createNewCategory, getAllCategories } = require('../controllers/category.controller');
const { validateNewCategory } = require('../middlewares/validations');

const categoryRouter = express.Router();

categoryRouter.post('/', validateToken, validateNewCategory, createNewCategory);
categoryRouter.get('/', validateToken, getAllCategories);

module.exports = categoryRouter;