import { combineReducers } from 'redux';
import {
  hasReservationReducer, selectedDateReducer, timeslotsReducer, hoursOfOperationReducer,
} from './reservation';
import { calendarDateReducer, calendarWeeksReducer, displayCalendarReducer } from './calendar';
import {
  todaysHoursReducer, priceRangeReducer, healthScoreReducer, isOpenReducer,
} from './status';

const rootRuducer = combineReducers({
  selectedDate: selectedDateReducer,
  calendarDate: calendarDateReducer,
  calendarWeeks: calendarWeeksReducer,
  timeslots: timeslotsReducer,
  hasReservation: hasReservationReducer,
  displayCalendar: displayCalendarReducer,
  hours: todaysHoursReducer,
  priceRange: priceRangeReducer,
  healthScore: healthScoreReducer,
  hoursOfOperation: hoursOfOperationReducer,
  isOpen: isOpenReducer,
});

export default rootRuducer;
