import React from 'react';
import PropTypes from 'prop-types';
import styles from '../sidebar.css';

const TimeSelect = ({ timeslots }) => (
  <span className={styles.timeContainer}>
    <img src="images/time.PNG" className={styles.icon} alt="#" />
    <select defaultValue="7:00 pm" className={styles.reservationSelect}>
      {timeslots.map((timeSlot) => {
        if (timeSlot !== '7:00 pm') {
          return (<option key={timeSlot} value={timeSlot}>{timeSlot}</option>);
        }
        return (<option selected key={timeSlot} value={timeSlot}>{timeSlot}</option>);
      })}
    </select>
    <img src="images/downarrow.PNG" className={styles.arrowIcon} alt="#" />
  </span>
);

export default TimeSelect;

TimeSelect.propTypes = {
  timeslots: PropTypes.arrayOf(PropTypes.string).isRequired,
};
