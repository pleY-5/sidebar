const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');

const app = express();
const router = require('./routes.js');

app.use(express.static('./public'));

app.use(morgan('dev'));
app.use(bodyParser.json());

app.use('/', router);

app.set('port', process.env.PORT || 7878);

app.listen(app.get('port'), () => {
  console.log(`app is listening to port ${app.get('port')}`);
});