import React from 'react';
import store from '../store';
import { updateSelectedDate, updateCalendarDate, updateCalendarWeeks } from '../action/updateDate.js';
import fetch from '../action/fetch.js';
import ReservationContainer from '../container/ReservationContainer.jsx';
import StatusContainer from '../container/StatusContainer.jsx';
import path from 'path';

class Sidebar extends React.Component {
  componentDidMount() {
    store.dispatch(updateSelectedDate());
    store.dispatch(updateCalendarDate());
    store.dispatch(updateCalendarWeeks());
    store.dispatch(fetch(`/restaurants/${path.basename(window.location.pathname)}`));
  }

  render() {
    return (
      <div>
        <ReservationContainer />
        <StatusContainer />
      </div>
    );
  }
}

export default Sidebar;