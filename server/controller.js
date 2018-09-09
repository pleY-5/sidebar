const model = require('./model.js');

const controller = {
  restaurant: {
    get: (req, res) => {
      model.restaurant.get(req.query.id)
        .then(data => res.send(data))
        .catch(err => res.send(err));
    }
  },
  reservation: {
    get: (req, res) => {
      model.reservation.get(req.query.id)
        .then(data => res.send(data))
        .catch(err => res.send(err));
    },
    post: (req, res) => {
      model.reservation.post(req.body)
        .then(() => res.send())
        .catch(err => res.send(err));
    }
  }
};

module.exports = controller;