import React from 'react';

const TimeSelect = ({ timeslots }) => (
  <span>
    <img src='images/time.PNG'/>
    <select defaultValue='7:00 PM'>
      {timeslots.map(timeSlot => {
        if (timeSlot === '7:00 PM') {
          return (<option selected key={timeSlot} value={timeSlot}>{timeSlot}</option>);
        }
        return (<option key={timeSlot} value={timeSlot}>{timeSlot}</option>);
      })}
    </select>
    <img src='images/downarrow.PNG'/>
  </span>
);

export default TimeSelect;