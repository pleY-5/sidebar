import React from 'react';
import styles from '../sidebar.css';

const CalendarWeek = ({ calendarWeek }) => (
  <tr>
    {calendarWeek.map((day, idx) => {
      console.log(calendarWeek);
      if (calendarWeek !== 0) {
        return ( <td key={idx} className={styles.calendarDay}>{day}</td> );
      } else {
        return ( <td key={idx} className={styles.calendarDay}></td> );
      }
    })}
  </tr>
);

export default CalendarWeek;