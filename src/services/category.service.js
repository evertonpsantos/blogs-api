const { Category } = require('../models');

const createNewCategory = async (newCategory) => {
  const registeredCategory = await Category.create(newCategory);
  return registeredCategory;
};

const getAllCategories = async () => {
  const categoriesList = await Category.findAll();
  return { type: '', message: categoriesList };
};

module.exports = {
  createNewCategory,
  getAllCategories,
};