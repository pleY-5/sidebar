const model = require('./model.js');

const controller = {
  restaurants: {
    get: (req, res) => {
      model.restaurants.get(req.params.id)
        .then(data => res.send(data))
        .catch(err => res.send(err));
    }
  },
  reservations: {
    get: (req, res) => {
      model.reservations.get(req.params.id)
        .then(data => res.send(data))
        .catch(err => res.send(err));
    },
    put: (req, res) => {
      model.reservations.put(req.body)
        .then(() => res.send())
        .catch(err => res.send(err));
    }
  }
};

module.exports = controller;