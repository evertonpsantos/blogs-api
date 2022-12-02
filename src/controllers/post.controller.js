const postsService = require('../services/post.service');

const createNewBlogPost = async (req, res) => {
  const userId = req.user.message.id;
  const newPost = req.body;
  const { type, message } = await postsService.createNewBlogPost(newPost, userId);
  if (type) return res.status(400).json({ message });
  return res.status(201).json(message); 
};

const getAllPosts = async (_req, res) => {
  const postsList = await postsService.getAllPosts();
  return res.status(200).json(postsList);
};

const getPostById = async (req, res) => {
  const postId = req.params.id;
  const result = await postsService.getPostById(postId);
  return res.status(200).json(result);
};

module.exports = {
  createNewBlogPost,
  getAllPosts,
  getPostById,
};