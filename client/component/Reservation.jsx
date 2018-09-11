import styles from '../sidebar.css';
import React from 'react';
import ReservationHeader from './ReservationHeader.jsx';
import NumOfPeopleSelect from './NumOfPeopleSelect.jsx';
import FindTable from './findTable.jsx';
import DateSelectContainer from '../container/DateSelectContainer.jsx';
import TimeSelectContainer from '../container/TimeSelectContainer.jsx';

const Reservation = ({ hasReservation }) => (
  <div>
    {hasReservation && (
      <div className={styles.reservationContainer}>
        <label>
          <ReservationHeader/>
          <DateSelectContainer/>
          <TimeSelectContainer/>
          <NumOfPeopleSelect/>
          <FindTable/>
        </label>
      </div>
    )}
  </div>
);

export default Reservation;