const router = require('express').Router();
const controller = require('./controller.js');

router.get('/restaurants/:id', controller.restaurants.get);

module.exports = router;