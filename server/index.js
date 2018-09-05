const express = require('express');
const app = express();

const router = require('./routes.js');

const morgan = require('morgan');
const bodyParser = require('body-parser');

app.use(morgan('dev'));
app.use(bodyParser.json());

app.use('/', router);

app.set('port', process.env.PORT || 7878);

app.listen(app.get('get'), () => {
  console.log(`app is listening to port ${app.get('port')}`);
});