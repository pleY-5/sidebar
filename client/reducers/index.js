const { combineReducers } = Redux;
const { restaurantData } = require('./fetch.js');

const rootRuducer = combineReducers({
  restaurantData
});

module.exports = rootRuducer;