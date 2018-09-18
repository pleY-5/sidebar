const router = require('express').Router();
const controller = require('./controller.js');

router.get('/restaurants/:nameOrId', controller.restaurants.get);

module.exports = router;
