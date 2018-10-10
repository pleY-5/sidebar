const knex = require('knex')({
  client: 'pg',
  connection: {
    host: 'localhost',
    user: 'rubylee',
    password: 'postgres',
    database: 'hiyelp',
  },
  pool: {
    min: 0,
    max: 20,
  },
});

module.exports = knex;
