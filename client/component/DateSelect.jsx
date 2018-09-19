import React from 'react';
import PropTypes from 'prop-types';
import styles from '../sidebar.css';
import Calendar from './Calendar';

const DateSelect = ({ selectedDate, displayCalendar, handleDateClick }) => (
  <div className={styles.dateContainer} id="date-container">
    <img src="https://s3-us-west-1.amazonaws.com/yelpreactorsidebaricons/calendar.PNG" className={styles.dateIcon} alt="#" />
    <input
      type="text"
      value={selectedDate}
      readOnly
      className={styles.dateText}
      onClick={() => handleDateClick(displayCalendar, selectedDate)}
      id="date-text"
    />
    <img src="https://s3-us-west-1.amazonaws.com/yelpreactorsidebaricons/downarrow.PNG" className={styles.dateArrowIcon} alt="#" />
    {displayCalendar && <Calendar />}
  </div>
);

export default DateSelect;

DateSelect.propTypes = {
  selectedDate: PropTypes.string.isRequired,
  displayCalendar: PropTypes.bool.isRequired,
  handleDateClick: PropTypes.func.isRequired,
};
