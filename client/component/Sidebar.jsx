import React from 'react';
import path from 'path';
import store from '../store';
import { updateSelectedDate, updateCalendarDate, updateCalendarWeeks } from '../action/updateDate';
import fetch from '../action/fetch';
import ReservationContainer from '../container/ReservationContainer';
import WeeklyHoursContainer from '../container/WeeklyHoursContainer';
import Status from './Status';
import styles from '../sidebar.css';

class Sidebar extends React.Component {
  componentDidMount() {
    store.dispatch(updateSelectedDate());
    store.dispatch(updateCalendarDate());
    store.dispatch(updateCalendarWeeks());
    store.dispatch(fetch(`/api/sidebar/restaurants/${path.basename(window.location.pathname)}/`));
  }

  render() {
    return (
      <div>
        <div className={styles.outerContainer}>
          <ReservationContainer />
          <Status />
        </div>
        <WeeklyHoursContainer />
      </div>
    );
  }
}

export default Sidebar;
