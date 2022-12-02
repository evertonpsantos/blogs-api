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

module.exports = {
  createNewBlogPost,
  getAllPosts,
};