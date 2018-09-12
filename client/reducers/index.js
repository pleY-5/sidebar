import { combineReducers } from 'redux';
import selectedDate from './selectedDate';
import timeslots from './timeslots.js';
import hasReservation from './hasReservation.js';

const rootRuducer = combineReducers({
  selectedDate,
  timeslots,
  hasReservation,
});

export default rootRuducer;