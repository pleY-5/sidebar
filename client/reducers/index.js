import { combineReducers } from 'redux';
import selectedDate from './selectedDate';
import timeslots from './timeslots.js';
import hasReservation from './hasReservation.js';
import { calendarDateReducer, calendarWeeksReducer, displayCalendarReducer } from './calendar.js';

const rootRuducer = combineReducers({
  selectedDate,
  calendarDate: calendarDateReducer,
  calendarWeeks: calendarWeeksReducer,
  timeslots,
  hasReservation,
  displayCalendar: displayCalendarReducer
});

export default rootRuducer;