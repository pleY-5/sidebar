import { changeDisplayCalendar, changeCalendarDate } from './calendar.js';

const updateDisplayCalendar = (bool, date) => dispatch => {
  const documentClickHandler = e => {
    if (!document.getElementById('date-container').contains(e.target)) {
      document.removeEventListener('click', documentClickHandler);
      dispatch(changeDisplayCalendar(false)); 
    }
  };
  if (bool) { document.addEventListener('click', documentClickHandler); }
  dispatch(changeCalendarDate(new Date(date)));
  return dispatch(changeDisplayCalendar(bool));
};

export default updateDisplayCalendar;