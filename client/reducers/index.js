import { combineReducers } from 'redux';
import selectedDate from './selectedDate';
import timeslots from './timeslots.js';
import hasReservation from './hasReservation.js';
import calendarDate from './calendarDate.js';

const rootRuducer = combineReducers({
  selectedDate,
  calendarDate,
  timeslots,
  hasReservation,
});

export default rootRuducer;