import React from 'react';
import { connect } from 'react-redux';
import DateSelect from '../component/DateSelect.jsx';

const mapStateToProps = state => ({
  currentDate: state.currentDate,
});

const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(DateSelect);