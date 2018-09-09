const router = require('express').Router();
const controller = require('./controller.js');

router.get('/restaurant?:id', controller.restaurant.get);

router.get('/reservation?:id', controller.reservation.get);

router.post('/reservation', controller.reservation.post);

module.exports = router;