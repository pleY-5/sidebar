require('newrelic');
const router = require('express').Router();
const { controller } = require('./controller.js');
// const { cache, controller } = require('./controller.js');

router.get('http://ec2-54-215-253-161.us-west-1.compute.amazonaws.com:7878/loaderio-7e70dcee6351c8c38041763c268f00f9/', controller.restaurants.get);
// router.get('/restaurants/:nameOrId', controller.restaurants.get);
// router.get('/restaurants/:nameOrId', cache, controller.restaurants.get);
router.post('/restaurants', controller.restaurants.post);

module.exports = router;
