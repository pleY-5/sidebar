const knex = require('../database/index.js');

const model = {
  restaurants: {
    get: (nameOrId) => {
      if (isNaN(nameOrId)) {
        const name = nameOrId;
        return knex('restaurants').where('name', name);
      }
      const id = nameOrId;
      return knex('restaurants').where('id', id);
    },
    post: req => knex('restaurants').insert({
      name: req.name,
      priceRange: req.pricerange,
      healthScore: req.healthscore,
      takesReservation: req.takesreservation,
      Monday: req.monday,
      Tuesday: req.tuesday,
      Wednesday: req.wednesday,
      Thursday: req.thursday,
      Friday: req.friday,
      Saturday: req.saturday,
      Sunday: req.sunday,
    }),
  },
};

module.exports = model;
