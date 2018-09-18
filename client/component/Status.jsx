import React from 'react';
import StatusHoursContainer from '../container/StatusHoursContainer.jsx'
import styles from '../sidebar.css';

const price = ['under $10', '$11-30', '$31-60', 'above $61'];

const Status = ({ hours, priceRange, healthScore }) => {
  const dollarSigns = ['greySign', 'greySign', 'greySign', 'greySign'];
  for (let i = 0; i <= priceRange; i++) {
    dollarSigns[i] = 'greenSign';
  }
  return (
    <div className={styles.statusContainer}>
      <table>
        <tbody>
          <StatusHoursContainer />
          <tr className={styles.statusIconRow}>
            <td>
              <div className={styles.signShift}>
                {dollarSigns.map((sign, idx) => (
                  <b className={styles[sign]} key={idx}>$</b>
                ))}
              </div>
            </td>
            <td className={styles.statusPrice}>
              Price range&nbsp;&nbsp;
              <b>{price[priceRange]}</b>
            </td>
          </tr>
          <tr className={styles.statusIconRow}>
            <td><img src='images/health.png' className={styles.statusHealth}/></td>
            <td className={styles.statusScore}>
              <b className={styles.healthScoreLink}>Health Score</b>
              <b>&nbsp;&nbsp;{healthScore} out of 100</b>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Status;