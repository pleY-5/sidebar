require('dotenv').config();

const knex = require('knex')({
  client: 'pg',
  connection: {
    host: process.env.SERVER_HOST,
    user: process.env.SERVER_USER,
    password: process.env.SERVER_PW,
    database: process.env.SERVER_DB,
  },
  pool: {
    min: 0,
    max: 20,
  },
});

module.exports = knex;
