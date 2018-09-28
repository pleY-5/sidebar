const { Restaurant } = require('../database');

const model = {
  restaurants: {
    get: (nameOrId) => {
      if (isNaN(nameOrId)) {
        const name = nameOrId;
        return Restaurant.findAll({ where: { name } });
      }
      const id = nameOrId;
      return Restaurant.findAll({ where: { id } });
    },
    delete: (nameOrId) => {
      if (isNaN(nameOrId)) {
        const name = nameOrId;
        Restaurant.destroy({ where: { name } });
      }
      const id = nameOrId;
      return Restaurant.destroy({ where: { id } });
    },
    post: () => {
      Restaurant.build({
        name: 'Marukami',
        priceRange: 2, // 0-3
        healthScore: 75, // 50-100
        takesReservation: false,
        Monday: '9:00 am - 10:00 pm',
        Tuesday: '9:00 am - 10:00 pm',
        Wednesday: '9:00 am - 10:00 pm',
        Thursday: '9:00 am - 10:00 pm',
        Friday: '9:00 am - 10:00 pm',
        Saturday: '9:00 am - 10:00 pm',
        Sunday: '9:00 am - 10:00 pm',
      }, { timestamps: true })
        .save();
    },
    put: () => {
      Restaurant.update({
        name: 'MariaCafe',
        priceRange: 1, // 0-3
        healthScore: 50, // 50-100
        takesReservation: false,
        Monday: '11:00 am - 3:00 pm',
        Tuesday: '11:00 am - 3:00 pm',
        Wednesday: '11:00 am - 3:00 pm',
        Thursday: '11:00 am - 3:00 pm',
        Friday: '11:00 am - 3:00 pm',
        Saturday: '11:00 am - 3:00 pm',
        Sunday: '11:00 am - 3:00 pm',
      }, { timestamps: true });
    },
  },
};

module.exports = model;
