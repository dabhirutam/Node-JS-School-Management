const express = require('express');
const teacherRoutes = express.Router();
const teacherController = require('../../controllers/teacherController');
const Auth = require('../../middlewares/auth');

teacherRoutes.get('/dashboard', Auth('teacher'), teacherController.Dashboard);

module.exports = teacherRoutes;