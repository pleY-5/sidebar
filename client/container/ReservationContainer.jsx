import React from 'react';
import { connect } from 'react-redux';
import Reservation from '../component/Reservation.jsx';

const mapStateToProps = state => ({
  reservationForm: state.reservationForm
});

export default connect(mapStateToProps)(Reservation);