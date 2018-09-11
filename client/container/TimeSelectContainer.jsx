import React from 'react';
import { connect } from 'react-redux';
import TimeSelect from '../component/TimeSelect.jsx';

const mapStateToProps = state => ({
  timeslots: state.timeslots,
});

const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(TimeSelect);