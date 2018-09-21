import React from 'react';
import PropTypes from 'prop-types';
import styles from '../sidebar.css';

const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

const Hours = ({ hoursOfOperation }) => {
  if (hoursOfOperation.length > 0) {
    hoursOfOperation.push(hoursOfOperation.shift());
    for (let i = 0; i < hoursOfOperation.length; i += 1) {
      hoursOfOperation[i] = hoursOfOperation[i].split(', ');
    }
  }
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
      {hoursOfOperation.map((hours, idx) => (
        <tbody>
          <tr key={idx}>
            <td className={styles.boldHours}>{days[idx]}</td>
            <td className={styles.hoursTableBody}>{hours[0]}</td>
          </tr>
          {hours[1] && (
            <tr>
              <td>&nbsp;</td>
              <td className={styles.hoursTableBody}>{hours[1]}</td>
            </tr>
          )}
        </tbody>
      ))}
    </table>
  );
};

export default Hours;

Hours.propTypes = {
  hoursOfOperation: PropTypes.arrayOf(PropTypes.string).isRequired,
};
