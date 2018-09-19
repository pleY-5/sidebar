import React from 'react';
import path from 'path';
import store from '../store';
import { updateSelectedDate, updateCalendarDate, updateCalendarWeeks } from '../action/updateDate';
import fetch from '../action/fetch';
import ReservationContainer from '../container/ReservationContainer';
import Status from './Status';

class Sidebar extends React.Component {
  componentDidMount() {
    store.dispatch(updateSelectedDate());
    store.dispatch(updateCalendarDate());
    store.dispatch(updateCalendarWeeks());
    store.dispatch(fetch(`http://localhost:7878/restaurants/${path.basename(window.location.pathname)}/`));
  }

  render() {
    return (
      <span>
        <ReservationContainer />
        <Status />
      </span>
    );
  }
}

export default Sidebar;
