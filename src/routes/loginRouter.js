const express = require('express');
const { validateLoginRequest } = require('../middlewares/validations');
const loginController = require('../controllers/login.controller');

const loginRouter = express.Router();

loginRouter.post('/', validateLoginRequest, loginController.loginRequest);

module.exports = loginRouter;