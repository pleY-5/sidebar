import { combineReducers } from 'redux';
import currentDate from './date.js';
import hoursOfOperation from './hoursOfOperation.js';
import reservationForm from './reservationForm.js';

const rootRuducer = combineReducers({
  currentDate,
  hoursOfOperation,
  reservationForm,
});

export default rootRuducer;