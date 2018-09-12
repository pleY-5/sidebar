import React from 'react';
import store from '../store';
import { updateSelectedDate, updateCalendarDate } from '../action/updateDate.js';
import fetch from '../action/fetch.js';
import ReservationContainer from '../container/ReservationContainer.jsx';

class Sidebar extends React.Component {
  componentDidMount() {
    store.dispatch(updateSelectedDate());
    store.dispatch(updateCalendarDate());
    store.dispatch(fetch(`/restaurants/${window.location.href.slice(22)}`));
  }

  render() {
    return (
      <ReservationContainer />
    );
  }
}

export default Sidebar;