const categoryService = require('../services/category.service');

const createNewCategory = async (req, res) => {
  const newCategory = req.body;
  const registeredCategory = await categoryService.createNewCategory(newCategory);
  return res.status(201).json(registeredCategory);
};

module.exports = {
  createNewCategory,
};