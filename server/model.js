const { Restaurant, Reservation } = require('../database');

const model = {
  restaurants: {
    get: (id) => Restaurant.findAll({ where: { id }})
  }
};

module.exports = model;