const { BlogPost, PostCategory, Category, User } = require('../models');

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

const getAllPosts = async () => {
  const postsList = BlogPost.findAll({
    include: 
    [{ model: User, as: 'user', attributes: { exclude: ['password'] } }, 
    { model: Category, as: 'categories', through: { attributes: [] } }],
  });
  
  return postsList;
};

const getPostById = async (postId) => {
  const result = await BlogPost.findByPk(postId, {
    include: 
    [{ model: User, as: 'user', attributes: { exclude: ['password'] } }, 
    { model: Category, as: 'categories', through: { attributes: [] } }],
  });

  return result;
};

module.exports = {
  createNewBlogPost,
  getAllPosts,
  getPostById,
};