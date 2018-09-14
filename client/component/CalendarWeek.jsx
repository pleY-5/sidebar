import React from 'react';
import styles from '../sidebar.css';

const CalendarWeek = ({ calendarWeek, selectedDate, calendarDate }) => {
  const selected = new Date(selectedDate);
  const thisMonth = new Date().getMonth();
  const today = new Date().getDate();
  const selectDay = selected.getDate();
  const selectMonth = selected.getMonth();
  const calendarMonth = calendarDate.getMonth();

  return (
    <tr>
      {calendarWeek.map((day, idx) => {
        if (thisMonth === calendarMonth && day === today) {
          return ( <td key={idx} className={[styles.selectedDate, styles.calendarDay, styles.today].join(' ')}>{day}</td> );
        } else if (selectMonth === calendarMonth && day === selectDay) {
          return ( <td key={idx} className={[styles.selectedDate, styles.calendarDay].join(' ')}>{day}</td> );
        } else if (day === today) {
          return ( <td key={idx} className={[styles.calendarDay, styles.today].join(' ')}>{day}</td> );
        } else if (day !== 0) {
          return ( <td key={idx} className={styles.calendarDay}>{day}</td> );
        } else {
          return ( <td key={idx} className={styles.calendarDay}></td> );
        }
      })}
    </tr>
  );
};

export default CalendarWeek;