import React from 'react';
import store from '../store';
import fetchData from '../action/getRestarauntData.js';
import ReservationContainer from '../container/ReservationContainer.jsx';

class Sidebar extends React.Component {
  componentDidMount() {
    store.dispatch(fetchData('/restaurant?id=1'));
  }

  render() {
    return (
      <ReservationContainer />
    );
  }
};

export default Sidebar;