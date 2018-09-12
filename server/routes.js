const router = require('express').Router();
const controller = require('./controller.js');

router.get('/restaurants/:id', controller.restaurants.get);

router.get('/reservations/:id', controller.reservations.get);

router.post('/reservations', controller.reservations.post);

module.exports = router;