import React from 'react';
import styles from '../sidebar.css';

const DateSelect = ({ currentDate }) => (
  <div className={styles.dateContainer}>
    <img src='images/calendar.PNG' className={styles.dateIcon}/>
    <input type='text' value={currentDate} readOnly className={styles.dateText}></input>
    <img src='images/downarrow.PNG' className={styles.dateArrowIcon}/>
  </div>
);

export default DateSelect;