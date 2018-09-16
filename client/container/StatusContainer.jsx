import React from 'react';
import { connect } from 'react-redux';
import Status from '../component/Status.jsx';

const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

const mapStateToProps = state => ({
  today: state[days[(new Date).getDay()]],
  priceRange: state.priceRange,
  healthScore: state.healthScore
});

export default connect(mapStateToProps)(Status);