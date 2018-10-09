require('newrelic');
const express = require('express');
// const request = require('superagent');
// const PORT = process.env.PORT;
// const redis = require('redis');

// const REDIS_PORT = process.env.REDIS_PORT || 6379;

const app = express();
// if you'd like to select database 3, instead of 0 (default), call
// client.select(3, function() { /* ... */ });

const morgan = require('morgan');
const bodyParser = require('body-parser');

const router = require('./routes.js');

app.use(morgan('dev'));
app.use(bodyParser.json());

app.use('/:nameOrId', express.static('public'));

app.use('/api/sidebar', router);
app.use('/', router);

app.set('port', process.env.PORT || 7878);

module.exports = app;
