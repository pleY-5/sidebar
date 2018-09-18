const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');

const app = express();
const router = require('./routes.js');

app.get('/:id', (req, res, next) => {
  if (req.params.id < 1 
    || req.params.id > 100
    || !req.params.id.match(/\d+/)) {
      return res.sendStatus(404); 
    }
  next();
});

app.use('/:id', express.static('public'));

app.use(morgan('dev'));
app.use(bodyParser.json());

app.use('/', router);

app.set('port', process.env.PORT || 7878);

module.exports = app;