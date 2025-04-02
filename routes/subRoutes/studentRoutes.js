const express = require('express');
const studentRoutes = express.Router();
const studentController = require('../../controllers/studentController');
const Auth = require('../../middlewares/auth');

studentRoutes.get('/dashboard', Auth(['admin','teacher','student']), studentController.Dashboard);

module.exports = studentRoutes;