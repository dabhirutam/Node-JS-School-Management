const express = require('express');
const userRoutes = express.Router();
const userController = require('../controllers/userController');
userRoutes.get('/', userController.GetUsers);

userRoutes.post('/register', userController.Register);
userRoutes.post('/logIn', userController.LogIn);

module.exports = userRoutes;