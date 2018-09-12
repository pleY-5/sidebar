import changeSelectedDate from './selectedDate';
import changeCalendarDate from './calendarDate';

const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const months = ['January', 'Febuary', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

const updateSelectedDate = (date = new Date()) => {
  let formattedDate = `${days[date.getDay()]}, ${months[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`;
  return dispatch => dispatch(changeSelectedDate(formattedDate));
};

const updateCalendarDate = (date = new Date()) => {
  return dispatch => dispatch(changeCalendarDate(date));
};

export { updateSelectedDate, updateCalendarDate };