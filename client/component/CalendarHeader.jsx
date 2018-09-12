import React from 'react';
import styles from '../sidebar.css';

const months = ['January', 'Febuary', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

const CalendarHeader = ({ calendarDate }) => (
  <thead>
    <tr>
      <th><input type='button' value='<<' className={styles.back} id='back'></input></th>
      <th className={styles.calendarHeaderTitle} id='calendar-header-title' colSpan='5'>
        {`${months[calendarDate.getMonth()]} ${calendarDate.getFullYear()}`}
      </th>
      <th><input type='button' value='>>' className={styles.forward} id='forward'></input></th>
    </tr>
    <tr id={styles.days}>
      {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map((day, idx) => (
        <th className={styles.daysOfWeek} key={idx}>{day}</th>
      ))}
    </tr>
  </thead>
);

export default CalendarHeader;