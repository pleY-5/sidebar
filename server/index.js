// require('newrelic');
const express = require('express');
require('dotenv').config();

const app = express();
const bodyParser = require('body-parser');
const router = require('./routes.js');

app.use(bodyParser.json());

app.use('/:nameOrId', express.static('public'));

app.use('/api/sidebar', router);
app.use('/', router);

app.set('port', process.env.PORT);

module.exports = app;