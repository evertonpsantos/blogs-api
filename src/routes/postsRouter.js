const express = require('express');
const { validateToken } = require('../auth/validateJWT');
const { getAllPosts, getPostById, 
  createNewBlogPost, deletePost, getByText } = require('../controllers/post.controller');
const { validateNewPost } = require('../middlewares/validations');

const postsRouter = express.Router();

postsRouter.get('/search', validateToken, getByText);
postsRouter.post('/', validateToken, validateNewPost, createNewBlogPost);
postsRouter.get('/', validateToken, getAllPosts);
postsRouter.get('/:id', validateToken, getPostById);
postsRouter.delete('/:id', validateToken, deletePost);

module.exports = postsRouter;