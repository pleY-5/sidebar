import get from '../service/fetchData.js';
import changeReservation from './reservationForm.js';
import changeHoursOfOperation from './hoursOfOperation.js'

const fetchData = (url) => {
  return dispatch => {
    get(url, data => {
      dispatch(changeReservation(data.reservationForm));
      // dispatch();
    });
  }
};

export default fetchData;


// let hoursOfOperation = [];
// if (restaurantData.name !== undefined) { 
//   let openCloseTimes = restaurantData[days[currDate.getDay()]].split(/ - |, /g);
//   console.log(openCloseTimes)
//   for (let i = 0; i < openCloseTimes.length; i += 2) {
//     let openTime = openCloseTimes[i]
//     let closeTime = openCloseTimes[i + 1]
//   }
// }