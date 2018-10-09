require('newrelic');
const router = require('express').Router();
const { cache, controller } = require('./controller.js');

// console.log('controller', JSON.stringify(controller.restaurants.get));
router.get('/restaurants/:nameOrId', cache, controller.restaurants.get);
router.post('/restaurants', controller.restaurants.post);

module.exports = router;
