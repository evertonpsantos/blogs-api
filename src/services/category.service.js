const { Category } = require('../models');

const createNewCategory = async (newCategory) => {
  const registeredCategory = await Category.create(newCategory);
  return registeredCategory;
};

module.exports = {
  createNewCategory,
};