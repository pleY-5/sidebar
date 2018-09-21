import { connect } from 'react-redux';
import WeeklyHours from '../component/WeeklyHours';

const mapStateToProps = state => ({
  hoursOfOperation: state.hoursOfOperation,
  isOpen: state.isOpen,
});

export default connect(mapStateToProps)(WeeklyHours);
