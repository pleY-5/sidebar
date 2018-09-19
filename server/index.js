const express = require('express');

const morgan = require('morgan');
const bodyParser = require('body-parser');
const cors = require('cors');

const names = require('../database/businessNames');

const app = express();
const router = require('./routes.js');

app.use(morgan('dev'));
app.use(bodyParser.json());
app.get(cors({ origin: 'http://localhost:8080' }));

app.get('/:nameOrId', (req, res, next) => {
  const id = parseInt(req.params.nameOrId, 10);
  const name = req.params.nameOrId.toLowerCase();
  if (isNaN(id)) {
    if (names.includes(name)) { return next(); }
  } else if (id > 0 && id <= 100) { return next(); }
  return res.sendStatus(404);
});

app.use('/:nameOrId', express.static('public'));

app.use('/', router);

app.set('port', process.env.PORT || 7878);

module.exports = app;
