import { connect } from 'react-redux';
import Status from '../component/Status.jsx';

const mapStateToProps = state => ({
  hours: state.hours,
  priceRange: state.priceRange,
  healthScore: state.healthScore
});

export default connect(mapStateToProps)(Status);