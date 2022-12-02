const express = require('express');
const { validateToken } = require('../auth/validateJWT');
const { getAllPosts, getPostById } = require('../controllers/post.controller');
// const { validateNewPost } = require('../middlewares/validations');

const postsRouter = express.Router();

// postsRouter.post('/', validateToken, validateNewPost, createNewBlogPost);

postsRouter.get('/', validateToken, getAllPosts);
postsRouter.get('/:id', validateToken, getPostById);

module.exports = postsRouter;