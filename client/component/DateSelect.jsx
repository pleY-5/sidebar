import React from 'react';
import PropTypes from 'prop-types';
import styles from '../sidebar.css';
import Calendar from './Calendar';

const DateSelect = ({ selectedDate, displayCalendar, handleDateClick }) => (
  <div className={styles.dateContainer} id="date-container">
    <img src="http://localhost:7878/images/calendar.PNG" className={styles.dateIcon} alt="#" />
    <input
      type="text"
      value={selectedDate}
      readOnly
      className={styles.dateText}
      onClick={() => handleDateClick(displayCalendar, selectedDate)}
      id="date-text"
    />
    <img src="http://localhost:7878/images/downarrow.PNG" className={styles.dateArrowIcon} alt="#" />
    {displayCalendar && <Calendar />}
  </div>
);

export default DateSelect;

DateSelect.propTypes = {
  selectedDate: PropTypes.string.isRequired,
  displayCalendar: PropTypes.bool.isRequired,
  handleDateClick: PropTypes.func.isRequired,
};
