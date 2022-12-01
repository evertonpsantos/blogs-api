const express = require('express');
const { createNewUser } = require('../controllers/user.controller');
const { validateNewUserRequest } = require('../middlewares/validations');

const userRouter = express.Router();

userRouter.post('/', validateNewUserRequest, createNewUser);

module.exports = userRouter;