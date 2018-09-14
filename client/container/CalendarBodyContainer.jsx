import React from 'react';
import { connect } from 'react-redux';
import CalendarBody from '../component/CalendarBody.jsx';

const mapStateToProps = state => ({
  calendarWeeks: state.calendarWeeks,
});

const mapDispatchToProps = dispatch => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(CalendarBody);