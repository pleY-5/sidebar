import React from 'react';
import styles from '../sidebar.css';

const TimeSelect = ({ timeslots }) => (
  <span className={styles.timeContainer}>
    <img src='images/time.PNG' className={styles.icon}/>
    <select defaultValue='7:00 pm' className={styles.select}>
      {timeslots.map(timeSlot => {
        if (timeSlot === '7:00 pm') {
          return (<option selected key={timeSlot} value={timeSlot}>{timeSlot}</option>);
        }
        return (<option key={timeSlot} value={timeSlot}>{timeSlot}</option>);
      })}
    </select>
    <img src='images/downarrow.PNG' className={styles.arrowIcon}/>
  </span>
);

export default TimeSelect;