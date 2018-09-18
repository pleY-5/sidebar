import React from 'react';
import PropTypes from 'prop-types';
import styles from '../sidebar.css';
import ReservationHeader from './ReservationHeader';
import NumOfPeopleSelect from './NumOfPeopleSelect';
import FindTable from './FindTable';
import DateSelectContainer from '../container/DateSelectContainer';
import TimeSelectContainer from '../container/TimeSelectContainer';

const Reservation = ({ hasReservation }) => (
  <div>
    {hasReservation && (
      <div className={styles.reservationContainer} id="reservation-container">
        <ReservationHeader />
        <DateSelectContainer />
        <TimeSelectContainer />
        <NumOfPeopleSelect />
        <FindTable />
      </div>
    )}
  </div>
);

export default Reservation;

Reservation.propTypes = {
  hasReservation: PropTypes.bool.isRequired,
};
