import React from 'react';
import { connect } from 'react-redux';
import Reservation from '../component/Reservation.jsx';

const mapStateToProps = state => ({
  currentDate: state.currentDate,
  reservationForm: state.reservationForm
});

export default connect(mapStateToProps)(Reservation);