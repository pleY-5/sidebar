import { combineReducers } from 'redux';
import restaurantData from './fetch.js';

const rootRuducer = combineReducers({
  restaurantData
});

export default rootRuducer;