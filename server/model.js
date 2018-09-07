const { Restaurant, Reservation } = require('../database');

const model = {
  api: {
    restaurant: {
      get: ({ id }) => {
        return Restaurant.findAll()
          .then()
          .catch();
      }
    },
    reservation: {
      get: ({ id }) => {
        return Reservation.findAll()
          .then()
          .catch();
      },
      post: (body) => {
        return Reservation.findOrCreate()
          .then()
          .catch();
      }
    }
  }
};