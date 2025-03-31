const express = require('express');
const authRoutes = require('./authRoutes');
const adminRoutes = require('./adminRoutes');
const routes = express();

routes.use('/auth', authRoutes);
routes.use('/admin', adminRoutes);

module.exports = routes;