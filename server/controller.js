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
      model.reservations.get(req.query.id)
        .then(data => res.send(data))
        .catch(err => res.send(err));
    },
    post: (req, res) => {
      model.reservations.post(req.body)
        .then(() => res.send())
        .catch(err => res.send(err));
    }
  }
};

module.exports = controller;