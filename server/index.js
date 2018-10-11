require('newrelic');
const express = require('express');
const path = require('path');
require('dotenv').config();

const app = express();
const bodyParser = require('body-parser');
const router = require('./routes.js');

app.use(bodyParser.json());

app.use(process.env.LOADER_URL, (req, res) => {
  res.sendFile(path.join(__dirname, '../public', 'loaderio-7e70dcee6351c8c38041763c268f00f9.txt'));
});

app.use('/:nameOrId', express.static('public'));

app.use('/api/sidebar', router);
app.use('/', router);

app.set('port', process.env.PORT);

module.exports = app;