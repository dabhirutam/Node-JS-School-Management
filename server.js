const express = require('express');
const db = require('./config/dbConfig');
const routes = require('./routes/index');

const app = express();
const port = 5000;

app.use(express.json());
app.use('/', routes);

app.listen(port, err => !err && console.log(`Server is Running is http://localhost:${port}`));