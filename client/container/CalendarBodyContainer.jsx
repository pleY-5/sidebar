import React from 'react';
import { connect } from 'react-redux';
import CalendarBody from '../component/CalendarBody.jsx';

const mapStateToProps = state => ({
  calendarWeeks: state.calendarWeeks,
  selectedDate: state.selectedDate,
  calendarDate: state.calendarDate
});

const mapDispatchToProps = dispatch => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(CalendarBody);