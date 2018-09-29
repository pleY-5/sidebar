const model = require('./model.js');

const controller = {
  restaurants: {
    get: (req, res) => {
      model.restaurants.get(req.params.nameOrId)
        .then(data => res.send(data))
        .catch(err => res.send(err));
    },
    post: (req, res) => {
      model.restaurants.post()
        .then(res.send({
          message: 'Restaurant posted successfully!',
        }))
        .catch(err => res.catch(err));
    },
    delete: (req, res) => {
      model.restaurants.delete(req.params.nameOrId)
        .then(res.send({
          message: 'Restaurant deleted successfully!',
        })
          .catch(err => res.status(505).send(err)));
    },

  },
};

module.exports = controller;
