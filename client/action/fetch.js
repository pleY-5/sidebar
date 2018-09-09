import get from '../service/fetchData.js';
import changeReservation from './reservationForm.js';
import changeCurrentDate from './date.js';
import changeHoursOfOperation from './hoursOfOperation.js'

const fetchData = (url) => {
  return dispatch => {
    get(url, data => {
      dispatch(changeReservation(data.reservationForm));
      // dispatch();
      // dispatch();
    });
  }
};

export default fetchData;