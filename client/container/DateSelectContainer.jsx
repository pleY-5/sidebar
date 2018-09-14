import React from 'react';
import { connect } from 'react-redux';
import DateSelect from '../component/DateSelect.jsx';

const mapStateToProps = state => ({
  selectedDate: state.selectedDate,
  displayCalendar: state.displayCalendar
});

export default connect(mapStateToProps)(DateSelect);