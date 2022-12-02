const postsService = require('../services/post.service');

const createNewBlogPost = async (req, res) => {
  const userId = req.user.message.id;
  const newPost = req.body;
  const { type, message } = await postsService.createNewBlogPost(newPost, userId);
  if (type) return res.status(400).json({ message });
  return res.status(201).json(message); 
};

module.exports = {
  createNewBlogPost,
};