const express = require('express');
const userRoutes = require('./UserRoutes');
const routes = express();

routes.use('/user', userRoutes);

module.exports = routes;