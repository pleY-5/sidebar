import { connect } from 'react-redux';
import StatusPriceRange from '../component/StatusPriceRange';

const mapStateToProps = state => ({
  priceRange: state.priceRange,
});

export default connect(mapStateToProps)(StatusPriceRange);
