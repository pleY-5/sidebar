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

app.listen(app.get('port'), () => {
  console.log(`app is listening to port ${app.get('port')}`);
});


module.exports = app;