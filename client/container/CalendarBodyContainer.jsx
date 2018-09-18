import { connect } from 'react-redux';
import CalendarBody from '../component/CalendarBody';
import changeDisplayCalendar from '../action/displayCalendar';
import { updateSelectedDate } from '../action/updateDate';
import { changeTimeslots } from '../action/reservation';
import getTimeslots from '../action/timeslots';

const mapStateToProps = state => ({
  calendarWeeks: state.calendarWeeks,
  selectedDate: state.selectedDate,
  calendarDate: state.calendarDate,
  hoursOfOperation: state.hoursOfOperation,
});

const mapDispatchToProps = dispatch => ({
  handleDateClick: (day, calendar, hoursOfOperation) => {
    const date = new Date(calendar);
    date.setDate(day);
    dispatch(changeTimeslots(getTimeslots(hoursOfOperation, date)));
    dispatch(updateSelectedDate(date));
    return dispatch(changeDisplayCalendar(false));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(CalendarBody);
