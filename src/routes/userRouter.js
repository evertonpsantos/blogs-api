const express = require('express');
const { validateToken } = require('../auth/validateJWT');
const { createNewUser, getAllUsers, findUserById, 
  deleteUser } = require('../controllers/user.controller');
const { validateNewUserRequest } = require('../middlewares/validations');

const userRouter = express.Router();

userRouter.post('/', validateNewUserRequest, createNewUser);
userRouter.get('/', validateToken, getAllUsers);
userRouter.get('/:id', validateToken, findUserById);
userRouter.delete('/me', validateToken, deleteUser);

module.exports = userRouter;