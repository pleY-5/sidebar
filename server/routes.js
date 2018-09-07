const router = require('express').Router();
const controller = require('./controller.js');

router.get('/api/restaurant?:id', controller.api.restaurant.get);

router.get('/api/reservation?:id', controller.api.reservation.get);

router.post('/api/reservation', controller.api.reservation.post);

module.exports = router;