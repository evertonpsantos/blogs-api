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
  const { type, message } = await postsService.getPostById(postId);
  if (type) return res.status(404).json({ message: 'Post does not exist' });
  return res.status(200).json(message);
};

const deletePost = async (req, res) => {
  const postId = req.params.id;
  const userId = req.user.message.id;

  const { type, message } = await postsService.deletePost(postId, userId);
  if (type === 'POST_NOT_FOUND') return res.status(404).json({ message });
  if (type === 'UNAUTHORIZED_USER') return res.status(401).json({ message });

  return res.status(204).json();
};

module.exports = {
  createNewBlogPost,
  getAllPosts,
  getPostById,
  deletePost,
};