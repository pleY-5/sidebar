import React from 'react';
import styles from '../sidebar.css';
import Calendar from './Calendar.jsx';

const DateSelect = ({ selectedDate, displayCalendar }) => (
  <div className={styles.dateContainer}>
    <img src='images/calendar.PNG' className={styles.dateIcon}/>
    <input type='text' value={selectedDate} readOnly className={styles.dateText}></input>
    <img src='images/downarrow.PNG' className={styles.dateArrowIcon}/>
    {displayCalendar && <Calendar/>}
  </div>
);

export default DateSelect;