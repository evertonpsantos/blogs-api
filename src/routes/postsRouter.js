const express = require('express');
const { validateToken } = require('../auth/validateJWT');
const { createNewBlogPost } = require('../controllers/post.controller');
const { validateNewPost } = require('../middlewares/validations');

const postsRouter = express.Router();

postsRouter.post('/', validateToken, validateNewPost, createNewBlogPost);

module.exports = postsRouter;