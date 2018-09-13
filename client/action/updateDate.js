import changeSelectedDate from './selectedDate.js';
import { changeCalendarDate, changeCalendarWeeks } from './calendar.js';

const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const months = ['January', 'Febuary', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

const updateSelectedDate = (date = new Date()) => {
  let formattedDate = `${days[date.getDay()]}, ${months[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`;
  return dispatch => dispatch(changeSelectedDate(formattedDate));
};

const updateCalendarDate = (date = new Date()) => {
  return dispatch => dispatch(changeCalendarDate(date));
};

const updateCalendarWeeks = (date = new Date()) => {
  const getLastDay = (date) => {
    let month = date.getMonth();
    let year = date.getFullYear();
    return new Date(year, month + 1, 0).getDate();
  }
  const weeks = [];
  let week = [0, 0, 0, 0, 0, 0, 0];
  const lastDay = getLastDay(date)
  for (let day = 1; day <= lastDay; day++) {
    date.setDate(day)
    if (!date.getDay()) { week = [0, 0, 0, 0, 0, 0, 0]; }
    week[date.getDay()] = day;
    if (date.getDay() === 6 || day === lastDay) {
      weeks.push(week.slice());
    }
  }
  return dispatch => dispatch(changeCalendarWeeks(weeks))
}

export { updateSelectedDate, updateCalendarDate, updateCalendarWeeks };