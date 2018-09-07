const router = require('express').Router();
const controller = require('controller.js');

router.get('/api/restaurant', controller.api.restaurant.get);

router.get('/api/reservations', controller.api.reservations.get);

router.post('/api/reservations', controller.api.reservations.post);

module.exports = router;