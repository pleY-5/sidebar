const { combineReducers } = Redux;
const { fetchErrorReducer, loadingDataReducer, fetchSuccessReducer } = require('./fetch.js');

const rootRuducer = combineReducers({
  fetchErrorReducer,
  loadingDataReducer,
  fetchSuccessReducer
});

module.exports = rootRuducer;