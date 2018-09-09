import '../sidebar.css';
import React from 'react';

const Reservation = ({ reservationForm, currentDate }) => (
  <div>
    {reservationForm && (
      <label>
        <div className='reservation'>Make a Reservation</div><br/>
        <select>
          <option defaultValue='date'>{currentDate}</option>
        </select><br/>
        <select>
          
        </select>
        <select>
          <option value='one'>1 Person</option>
          <option defaultValue='two'>2 People</option>
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