import React from 'react';
import styles from '../sidebar.css';

const CalendarWeek = ({ calendarWeek, selectedDate, calendarDate }) => (
  <tr>
    {calendarWeek.map((day, idx) => {
      const selected = new Date(selectedDate);
      if (selected.getMonth() === calendarDate.getMonth() && day === selected.getDate()) {
        return ( <td key={idx} className={styles.selectedDate}>{day}</td> );
      } else if (day !== 0) {
        return ( <td key={idx} className={styles.calendarDay}>{day}</td> );
      } else {
        return ( <td key={idx} className={styles.calendarDay}></td> );
      }
    })}
  </tr>
);

export default CalendarWeek;