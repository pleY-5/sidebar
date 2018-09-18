import { connect } from 'react-redux';
import StatusHealth from '../component/StatusHealth';

const mapStateToProps = state => ({
  healthScore: state.healthScore,
});

export default connect(mapStateToProps)(StatusHealth);
