import React from 'react';
import { connect } from 'react-redux';
import CalendarBody from '../component/CalendarBody.jsx';
import changeDisplayCalendar from '../action/displayCalendar.js';
import { updateSelectedDate } from '../action/updateDate.js';

const mapStateToProps = state => ({
  calendarWeeks: state.calendarWeeks,
  selectedDate: state.selectedDate,
  calendarDate: state.calendarDate
});

const mapDispatchToProps = dispatch => ({
  handleDateClick: (day, calendar) => {
    const date = new Date(calendar);
    date.setDate(day);
    dispatch(updateSelectedDate(date)); 
    dispatch(changeDisplayCalendar(false)); 
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(CalendarBody);