import React from 'react';
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
          <tr>
            <td className={styles.emptyRow}>
              <img src='images/clock.png' className={styles.statusClock}/>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            </td>
            <td className={styles.statusHours}>
              Today&nbsp;&nbsp;
              <b>
                {hours.split(', ')[0]}<br/>
                {hours.split(', ')[1]}
                {hours.split(', ')[1] !== undefined && (<b>&nbsp;&nbsp;</b>)}
              </b>
              <b className={styles.open}>Open now</b>
            </td>
            <td className={styles.emptyRow}>&nbsp;&nbsp;</td>
          </tr>
          <tr>
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
          <tr>
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