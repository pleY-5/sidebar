import React from 'react';
import styles from '../sidebar.css';

const ReservationHeader = () => (
  <div className={styles.headerContainer}>
    <h3 className={styles.header}>
      <img src="https://s3-us-west-1.amazonaws.com/yelpreactorsidebaricons/header.PNG" className={styles.headerIcon} alt="#" />
      <span
        className={styles.headerTitle}
        id="header-title"
      >
        Make a Reservation
      </span>
    </h3>
  </div>
);

export default ReservationHeader;
