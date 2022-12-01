const express = require('express');
const { validateToken } = require('../auth/validateJWT');
const { createNewUser, getAllUsers } = require('../controllers/user.controller');
const { validateNewUserRequest } = require('../middlewares/validations');

const userRouter = express.Router();

userRouter.post('/', validateNewUserRequest, createNewUser);
userRouter.get('/', validateToken, getAllUsers);

module.exports = userRouter;