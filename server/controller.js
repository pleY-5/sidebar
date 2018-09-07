const model = require('./model.js');
const queryString = require('query-string');

const controller = {
  api: {
    restaurant: {
      get: (req, res) => {
        let { query } = queryString.parseUrl(req.url);
        model.api.restaurant.get(query)
          .then(data => res.send(data))
          .catch(err => res.send(err));
      }
    },
    reservations: {
      get: (req, res) => {
        let { query } = queryString.parseUrl(req.url);
        model.api.restaurant.get(query)
          .then(data => res.send(data))
          .catch(err => res.send(err));
      },
      post: (req, res) => {
        model.api.restaurant.post(req.body)
          .then(() => res.send())
          .catch(err => res.send(err));
      }
    }
  }
};

module.exports = controller;