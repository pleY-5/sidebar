import get from '../service/fetch.js';
import { changeHasReservation, changeTimeslots, changeHoursOfOperation } from './reservation.js';
import { changeTodaysHours, changePriceRange, changeHealthScore, changeIsOpen } from './status.js';
import getTimeslots from './timeslots.js'

const getIsOpen = openHours => {
  let isOpen = false;
  const currHour = (new Date()).getHours();
  const currMin = (new Date()).getMinutes();
  let openCloseTimes = openHours.split(/ - |, /g);
  openCloseTimes = openCloseTimes.map(time => {
    time = time.split(/:| /);
    if (time[2] === 'pm') { time[0] = parseInt(time[0]) + 12; }
    return parseInt(time[0]) + parseInt(time[1]) / 60;
  });
  const currTime = currHour + currMin / 60;
  for (let i = 0; i < openCloseTimes.length; i += 2) {
    if (currTime >= openCloseTimes[i] ||
        currTime <= openCloseTimes[i + 1]) {
          isOpen = true;
        }
  }
  return isOpen;
}

const fetch = url => {
  return dispatch => {
    return get(url) 
      .then(data => {
        const hoursOfOperation = [
          data.Sunday,
          data.Monday,
          data.Tuesday,
          data.Wednesday,
          data.Thursday,
          data.Friday,
          data.Saturday,
        ];
        const todaysHours = hoursOfOperation[(new Date).getDay()];
        const isOpen = getIsOpen(todaysHours);
        dispatch(changeHasReservation(data.takesReservation));
        dispatch(changeTimeslots(getTimeslots(hoursOfOperation)));
        dispatch(changeHoursOfOperation(hoursOfOperation));
        dispatch(changeTodaysHours(todaysHours));
        dispatch(changePriceRange(data.priceRange));
        dispatch(changeHealthScore(data.healthScore));
        dispatch(changeIsOpen(isOpen));
      })
  };
};

export default fetch;