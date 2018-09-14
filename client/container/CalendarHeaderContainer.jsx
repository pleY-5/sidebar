import React from 'react';
import { connect } from 'react-redux';
import CalendarHeader from '../component/CalendarHeader.jsx';
import { updateCalendarDate, updateCalendarWeeks } from '../action/updateDate.js';

const mapStateToProps = state => ({
  calendarDate: state.calendarDate,
});

const mapDispatchToProps = dispatch => ({
  handleDecreaseMonthClick: date => {
    date = new Date(date);
    const prev = date.setMonth(date.getMonth() - 1);
    dispatch(updateCalendarWeeks(new Date(prev)));
    dispatch(updateCalendarDate(new Date(prev)));
  },
  handleIncreaseMonthClick: date => {
    date = new Date(date);
    const next = date.setMonth(date.getMonth() + 1);
    dispatch(updateCalendarWeeks(new Date(next)));
    dispatch(updateCalendarDate(new Date(next)));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(CalendarHeader);