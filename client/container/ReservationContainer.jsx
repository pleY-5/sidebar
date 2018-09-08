const { connect } = ReactRedux;
const Reservation = require('../component/Reservation.jsx')

const mapStateToProps = state => ({
  restaurantData: state.restaurantData
});

module.exports = connect(mapStateToProps)(Reservation);