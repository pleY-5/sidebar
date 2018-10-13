require('newrelic');
const router = require('express').Router();
//const { controller } = require('./controller.js');
const { cache, controller } = require('./controller.js');

//router.get('/restaurants/:nameOrId', controller.restaurants.get);
router.get('/restaurants/:nameOrId', cache, controller.restaurants.get);
router.post('/restaurants', controller.restaurants.post);

module.exports = router;
