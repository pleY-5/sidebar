const model = require('./model.js');

const controller = {
  api: {
    restaurant: {
      get: (req, res) => {
        model.api.restaurant.get(req.query.id)
          .then(data => res.send(data))
          .catch(err => res.send(err));
      }
    },
    reservation: {
      get: (req, res) => {
        model.api.reservation.get(req.query.id)
          .then(data => res.send(data))
          .catch(err => res.send(err));
      },
      post: (req, res) => {
        model.api.reservation.post(req.body)
          .then(() => res.send())
          .catch(err => res.send(err));
      }
    }
  }
};

module.exports = controller;