import { combineReducers } from 'redux';
import { hasReservationReducer, selectedDateReducer, timeslotsReducer } from './reservation';
import { calendarDateReducer, calendarWeeksReducer, displayCalendarReducer } from './calendar.js';

const rootRuducer = combineReducers({
  selectedDate, selectedDateReducer,
  calendarDate: calendarDateReducer,
  calendarWeeks: calendarWeeksReducer,
  timeslots, timeslotsReducer,
  hasReservation: hasReservationReducer,
  displayCalendar: displayCalendarReducer
});

export default rootRuducer;