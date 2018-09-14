import React from 'react';
import styles from '../sidebar.css';
import Calendar from './Calendar.jsx';

const DateSelect = ({ selectedDate, displayCalendar, handleDateClick }) => (
  <div className={styles.dateContainer} id='date-container'>
    <img src='images/calendar.PNG' className={styles.dateIcon}/>
    <input 
      type='text' 
      value={selectedDate} 
      readOnly 
      className={styles.dateText} 
      onClick={() => handleDateClick(displayCalendar, selectedDate)}
      id='date-text'
    ></input>
    <img src='images/downarrow.PNG' className={styles.dateArrowIcon}/>
    {displayCalendar && <Calendar/>}
  </div>
);

export default DateSelect;