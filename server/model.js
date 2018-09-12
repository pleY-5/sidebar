const { Restaurant, Reservation } = require('../database');

const model = {
  restaurants: {
    get: (id) => {
      return Restaurant.findAll({ where: { id }});
    }
  },
  reservations: {
    get: (id) => {
      return Reservation.findAll({ where: { restaurantId: id }});
    },
    post: (body) => {
      return Reservation.create(body);
    }
  }
};

module.exports = model;