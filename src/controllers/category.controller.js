const categoryService = require('../services/category.service');

const createNewCategory = async (req, res) => {
  const newCategory = req.body;
  const registeredCategory = await categoryService.createNewCategory(newCategory);
  return res.status(201).json(registeredCategory);
};

const getAllCategories = async (_req, res) => {
  const { message } = await categoryService.getAllCategories();
  return res.status(200).json(message);
};

module.exports = {
  createNewCategory,
  getAllCategories,
};