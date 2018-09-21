import { connect } from 'react-redux';
import Hours from '../component/Hours';

const mapStateToProps = state => ({
  hoursOfOperation: state.hoursOfOperation,
});

export default connect(mapStateToProps)(Hours);
