const express = require('express');
const adminRoutes = express.Router();
const adminController = require('../../controllers/adminController');
const authController = require('../../controllers/authController');
const Auth = require('../../middlewares/auth');

adminRoutes.use(Auth(['admin']));

// Dashboard Route
adminRoutes.get('/dashboard', adminController.Dashboard);

// Profile Route
adminRoutes.put('/profile', adminController.UpdateProfile);

// Teacher Route
adminRoutes.get('/teacher', adminController.ViewTeacher);
adminRoutes.get('/teacher/:_id', adminController.SingleViewTeacher);
adminRoutes.post('/teacher', authController.Register);
adminRoutes.put('/teacher', adminController.UpdateTeacher);
adminRoutes.delete('/teacher/:_id', adminController.DeleteTeacher);

module.exports = adminRoutes;