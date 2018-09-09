import '../sidebar.css';
import React from 'react';

const Reservation = ({ reservationForm, hoursOfOperation, currentDate }) => (
  <div className='reservation-container'>
    {reservationForm && (
      <label>
        <h3 className='reservation'><a href='' className='disable'>Make a Reservation</a></h3><br/>
        <select>
          <option value='date'>{currentDate}</option>
        </select><br/>
        <select defaultValue='7:00 PM'>
          {hoursOfOperation.map(timeSlot => (
              <option key={timeSlot} value={timeSlot}>{timeSlot}</option>
          ))}
        </select>
        <select defaultValue='two'>
          <option value='one'>1 Person</option>
          <option value='two'>2 People</option>
          <option value='three'>3 People</option>
          <option value='four'>4 People</option>
          <option value='five'>5 People</option>
        </select><br/>
        <input type='submit' value='Find a Table' onClick={e => e.preventDefault()}></input>
      </label>
    )}
  </div>
);

export default Reservation;