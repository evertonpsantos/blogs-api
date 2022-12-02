const { BlogPost, PostCategory, Category } = require('../models');

const createNewBlogPost = async ({ title, content, categoryIds }, userId) => {
  const categoriesList = await Category.findAll();
  const mappedList = categoriesList.map(({ id }) => id);
  const notFoundCategory = categoryIds
    .every((categoryId) => mappedList.includes(categoryId));
  if (!notFoundCategory) { 
    return { type: 'CATEGORY_NOT_FOUND', message: 'one or more "categoryIds" not found' };
  }

  const newBlogPost = await BlogPost
    .create({ title, content, userId, published: new Date(), updated: new Date() });
  const { id } = newBlogPost;
  await Promise.all(categoryIds
    .map((categoryId) => PostCategory.create({ postId: id, categoryId })));
  
  return { type: '', message: newBlogPost };
};

module.exports = {
  createNewBlogPost,
};