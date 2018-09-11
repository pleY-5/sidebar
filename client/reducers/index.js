import { combineReducers } from 'redux';
import currentDate from './currentDate.js';
import timeslots from './timeslots.js';
import hasReservation from './hasReservation.js';

const rootRuducer = combineReducers({
  currentDate,
  timeslots,
  hasReservation,
});

export default rootRuducer;