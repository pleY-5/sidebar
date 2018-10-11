// const redis = require('redis');
const model = require('./model.js');
require('dotenv').config();

// const client = redis.createClient(process.env.REDIS_PORT, process.env.REDIS_HOST);
// const client = redis.createClient();

// const cache = (req, res, next) => {
//   const {
//     nameOrId
//   } = req.params.nameOrId;
//   client.get(nameOrId, (err, data) => {
//     if (err) res.status(500).send(err);

//     if (data != null) {
//       res.send(JSON.parse(data));
//     } else {
//       next();
//     }
//   });
// };

const controller = {
  restaurants: {
    get: (req, res) => {
      model.restaurants.get(req.params.nameOrId)
        .then((data) => {
          // client.setex(req.params.nameOrId, 100000, JSON.stringify(data));
          res.send(data);
        })
        .catch(err => res.send(err));
    },
    post: (req, res) => {
      model.restaurants.post(req)
        .then(res.send({
          message: 'Restaurant posted successfully!',
        }))
        .catch(err => res.status(505).send(err));
    },
  },
};

module.exports = {
  controller,
  // cache,
};