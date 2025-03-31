const express = require('express');
const adminRoutes = express.Router();
const adminController = require('../controllers/adminController');
const Auth = require('../middlewares/auth');

adminRoutes.get('/dashboard', Auth, adminController.Dashboard);

module.exports = adminRoutes;