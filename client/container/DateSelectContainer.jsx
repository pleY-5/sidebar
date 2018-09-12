import React from 'react';
import { connect } from 'react-redux';
import DateSelect from '../component/DateSelect.jsx';

const mapStateToProps = state => ({
  selectedDate: state.selectedDate,
});

const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(DateSelect);