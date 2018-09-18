import React from 'react';
import styles from '../sidebar.css';

const StatusHealth = ({ healthScore }) => (
  <tr className={styles.statusIconRow}>
    <td><img src='images/health.png' className={styles.statusHealth}/></td>
    <td className={styles.statusScore}>
      <b className={styles.healthScoreLink}>Health Score</b>
      <b id='health-score'>&nbsp;&nbsp;{healthScore} out of 100</b>
    </td>
  </tr>
);

export default StatusHealth;