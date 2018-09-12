import React from 'react';
import CalendarHeader from './CalendarHeader.jsx';
import CalendarBody from './CalendarBody.jsx';
import styles from '../sidebar.css';

const Calendar = () => (
  <div className={styles.calendarContainer} id='calendar-container'>
    <table>
      <CalendarHeader calendarDate={new Date('September 19, 2018')}/>
      <CalendarBody/>
    </table>
  </div>
);

export default Calendar;