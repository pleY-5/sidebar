require('newrelic');
const express = require('express');
const path = require('path');
require('dotenv').config();

const app = express();
const bodyParser = require('body-parser');
const router = require('./routes.js');

app.use(bodyParser.json());

app.use('/loaderio-951528350ac0a789373fbec881161135/', (req, res) => {
  res.sendFile(path.join(__dirname, '../public', 'loaderio-951528350ac0a789373fbec881161135.txt'));
});

app.use('/:nameOrId', express.static('public'));

app.use('/api/sidebar', router);
app.use('/', router);

app.set('port', process.env.PORT);

module.exports = app;