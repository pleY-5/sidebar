const { fetchData } = require('../action/getRestarauntData.js');
const store = require('../store');
const ReservationContainer = require('../container/ReservationContainer.jsx');

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

module.exports = Sidebar;