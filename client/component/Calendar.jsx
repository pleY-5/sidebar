import React from 'react';
import CalendarHeaderContainer from '../container/CalendarHeaderContainer.jsx';
import CalendarBody from './CalendarBody.jsx';
import styles from '../sidebar.css';

const Calendar = () => (
  <div className={styles.calendarContainer} id='calendar-container'>
    <table>
      <CalendarHeaderContainer/>
      <CalendarBody/>
    </table>
  </div>
);

export default Calendar;