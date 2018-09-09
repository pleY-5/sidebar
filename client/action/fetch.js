import get from '../service/fetchData.js';
import changeReservation from './reservationForm.js';
import changeHoursOfOperation from './hoursOfOperation.js'

const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

const getHoursOfOperation = restaurantInfo => {
  const hoursOfOperation = [];
  let openCloseTimes = restaurantInfo[days[(new Date).getDay()]].split(/ - |, /g);
  for (let i = 0; i < openCloseTimes.length; i += 2) {
    let open = openCloseTimes[i];
    let close = openCloseTimes[i + 1];
    hoursOfOperation.push(open);
    while(!close.includes(open)) {
      open = open.split(':')
      if (open[1].match(/^30/)) {
        open[0] = (Number(open[0]) + 1).toString();
        open[1] = open[1].replace(/^30/, '00')
        if (open[0].match(/^12/)) {
          open[1].match(/AM$/)
            ? open[1] = open[1].replace(/AM$/, 'PM')
            : open[1] = open[1].replace(/PM$/, 'AM');
        }
        if (open[0].match(/^13/)) {
          open[0] = open[0].replace(/^13/, '1')
        }
        open = open.join(':')
      } else {
        open[1] = open[1].replace(/^00/, '30')
        open = open.join(':')
      }
      hoursOfOperation.push(open);
    }
  }
  return hoursOfOperation;
};

const fetchData = url => {
  return dispatch => {
    get(url, data => {
      dispatch(changeReservation(data.reservationForm));
      dispatch(changeHoursOfOperation(getHoursOfOperation(data)));
    });
  }
};

export default fetchData;