import React from 'react';
import { connect } from 'react-redux';
import Reservation from '../component/Reservation.jsx';

const mapStateToProps = state => ({
  restaurantData: state.restaurantData
});

export default connect(mapStateToProps)(Reservation);