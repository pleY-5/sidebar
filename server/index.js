const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');

const app = express();
const router = require('./routes.js');

app.get('/:id', (req, res, next) => {
  if (req.params.id > 0 && req.params.id <= 100){
    return next();
  }
  res.sendStatus(404); 
});

app.use('/:id', express.static('public'));

app.use(morgan('dev'));
app.use(bodyParser.json());

app.use('/', router);

app.set('port', process.env.PORT || 7878);

module.exports = app;