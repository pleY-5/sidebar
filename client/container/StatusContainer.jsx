import React from 'react';
import { connect } from 'react-redux';
import Status from '../component/Status.jsx';

const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

const mapStateToProps = state => ({
  hours: state.hours,
  priceRange: state.priceRange,
  healthScore: state.healthScore
});

export default connect(mapStateToProps)(Status);