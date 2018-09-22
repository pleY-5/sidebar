import React from 'react';
import PropTypes from 'prop-types';
import styles from '../sidebar.css';

const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

const WeeklyHours = ({ hoursOfOperation, isOpen }) => {
  let weeklyHours = [];
  if (hoursOfOperation.length > 0) {
    weeklyHours = hoursOfOperation.slice();
    weeklyHours.push(weeklyHours.shift());
    for (let i = 0; i < weeklyHours.length; i += 1) {
      weeklyHours[i] = weeklyHours[i].split(', ');
    }
  }
  const today = ((new Date()).getDay() + 6) % 7;
  return (
    <table>
      <thead>
        <tr>
          <th className={styles.hoursTableHead}>Hours</th>
        </tr>
        <tr>
          <th className={styles.hoursEmptyRow}>&nbsp;</th>
        </tr>
      </thead>
      {weeklyHours.map((hours, idx) => (
        <tbody>
          <tr key={idx}>
            <td className={styles.boldHours}>{days[idx]}</td>
            <td className={styles.hoursTableBody}>{hours[0]}</td>
            {idx === today && isOpen && <td className={styles.openHours}>Open now</td>}
            {idx === today && !isOpen && <td className={styles.closeHours}>Closed now</td>}
          </tr>
          {hours[1] && (
            <tr>
              <td>&nbsp;</td>
              <td className={styles.hoursTableBody}>{hours[1]}</td>
            </tr>
          )}
        </tbody>
      ))}
      <tfoot>
        <tr>
          <td colSpan="2" className={styles.footer}>
            <small href="#" className={styles.editInfo}>
              <img
                src="https://s3-us-west-1.amazonaws.com/yelpreactorsidebaricons/edit.png"
                alt="#"
                className={styles.editImg}
              />
              Edit Business Info
            </small>
          </td>
        </tr>
      </tfoot>
    </table>
  );
};

export default WeeklyHours;

WeeklyHours.propTypes = {
  hoursOfOperation: PropTypes.arrayOf(PropTypes.string).isRequired,
  isOpen: PropTypes.bool.isRequired,
};
