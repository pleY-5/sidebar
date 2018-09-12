import React from 'react';
import { connect } from 'react-redux';
import CalendarHeader from '../component/CalendarHeader.jsx';

const mapStateToProps = state => ({
  calendarDate: state.calendarDate,
});

export default connect(mapStateToProps)(CalendarHeader);