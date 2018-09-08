const { Restaurant, Reservation } = require('./../database');

const model = {
  api: {
    restaurant: {
      get: (id) => {
        return Restaurant.findAll({ where: { id }});
      }
    },
    reservation: {
      get: (id) => {
        return Reservation.findAll({ where: { restaurantId: id }});
      },
      post: (body) => {
        return Reservation.create(body);
      }
    }
  }
};

module.exports = model;