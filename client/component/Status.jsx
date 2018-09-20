import React from 'react';
import StatusHoursContainer from '../container/StatusHoursContainer';
import StatusPriceRangeContainer from '../container/StatusPriceRangeContainer';
import StatusHealthContainer from '../container/StatusHealthContainer';
import styles from '../sidebar.css';

const Status = () => (
  <div className={styles.statusContainer}>
    <table className={styles.sidebarTable}>
      <tbody>
        <StatusHoursContainer />
        <StatusPriceRangeContainer />
        <StatusHealthContainer />
      </tbody>
    </table>
  </div>
);

export default Status;
