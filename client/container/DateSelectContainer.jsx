import { connect } from 'react-redux';
import DateSelect from '../component/DateSelect';
import updateDisplayCalendar from '../action/displayCalendar';

const mapStateToProps = state => ({
  selectedDate: state.selectedDate,
  displayCalendar: state.displayCalendar,
});

const mapDispatchToProps = dispatch => ({
  handleDateClick: (bool, date) => dispatch(updateDisplayCalendar(!bool, date)),
});

export default connect(mapStateToProps, mapDispatchToProps)(DateSelect);
