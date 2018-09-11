import React from 'react';

const DateSelect = ({ currentDate }) => (
  <div className='date-container'>
    <img src='images/calendar.PNG'/>
    <select>
      <option value='date'>{currentDate}</option>
    </select>
    <img src='images/downarrow.PNG'/>
  </div>
);

export default DateSelect;