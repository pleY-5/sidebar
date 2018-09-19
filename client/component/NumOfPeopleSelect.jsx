import React from 'react';
import styles from '../sidebar.css';

const NumOfPeopleSelect = () => (
  <span className={styles.peopleContainer}>
    <img src="http://localhost:7878/images/people.PNG" className={styles.peopleIcon} alt="#" />
    <select defaultValue="two" className={styles.reservationSelect}>
      <option value="one">1 person</option>
      <option value="two">2 people</option>
      <option value="three">3 people</option>
      <option value="four">4 people</option>
      <option value="five">5 people</option>
    </select>
    <img src="http://localhost:7878/images/downarrow.PNG" className={styles.arrowIcon} alt="#" />
  </span>
);

export default NumOfPeopleSelect;
