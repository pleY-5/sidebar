import '../sidebar.css';
import React from 'react';
import ReservationHeader from './ReservationHeader.jsx';
import NumOfPeopleSelect from './NumOfPeopleSelect.jsx';
import FindTable from './findTable.jsx';
import DateSelectContainer from '../container/DateSelectContainer.jsx';
import TimeSelectContainer from '../container/TimeSelectContainer.jsx';

const Reservation = ({ hasReservation }) => (
  <div className='reservation-container'>
    {hasReservation && (
      <label>
        <ReservationHeader/>
        <DateSelectContainer/>
        <TimeSelectContainer/>
        <NumOfPeopleSelect/>
        <FindTable/>
      </label>
    )}
  </div>
);

export default Reservation;