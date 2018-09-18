import { connect } from 'react-redux';
import Reservation from '../component/Reservation';

const mapStateToProps = state => ({
  hasReservation: state.hasReservation,
});

export default connect(mapStateToProps)(Reservation);
