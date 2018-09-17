const model = require('./model.js');

const controller = {
  restaurants: {
    get: (req, res) => {
      model.restaurants.get(req.params.id)
        .then(data => res.send(data))
        .catch(err => res.send(err));
    }
  }
};

module.exports = controller;