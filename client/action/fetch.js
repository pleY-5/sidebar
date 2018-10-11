import get from '../service/fetch';
import {
  changeHasReservation,
  changeTimeslots,
  changeHoursOfOperation
} from './reservation';
import {
  changeTodaysHours,
  changePriceRange,
  changeHealthScore,
  changeIsOpen,
} from './status';
import getTimeslots from './timeslots';

const getIsOpen = (openHours) => {
  let isOpen = false;
  const currHour = (new Date()).getHours();
  const currMin = (new Date()).getMinutes();
  let openCloseTimes = openHours.split(/ - |, /g);
  openCloseTimes = openCloseTimes.map((time) => {
    const times = time.split(/:| /);
    if (times[2] === 'pm') {
      times[0] = parseInt(times[0], 10) + 12;
    }
    return parseInt(times[0], 10) + parseInt(times[1], 10) / 60;
  });
  const currTime = currHour + currMin / 60;
  for (let i = 0; i < openCloseTimes.length; i += 2) {
    if (currTime >= openCloseTimes[i] &&
      currTime <= openCloseTimes[i + 1]) {
      isOpen = true;
    }
  }
  return isOpen;
};

const fetch = url => dispatch => get(url)
  .then((data) => {
    console.log('sidebar:', data);
    const hoursOfOperation = [
      data.sunday,
      data.monday,
      data.tuesday,
      data.wednesday,
      data.thursday,
      data.friday,
      data.saturday,
    ];
    const boolean = data.takesReservation === 1;
    console.log('typeof reservation', typeof data.takesReservation);
    console.log('typeof priceRange', typeof data.priceRange);
    console.log('tyrpoe of healthscore', typeof data.healthScore);
    const todaysHours = hoursOfOperation[(new Date()).getDay()];
    const isOpen = getIsOpen(todaysHours);
    dispatch(changeHasReservation(boolean));
    dispatch(changeTimeslots(getTimeslots(hoursOfOperation)));
    dispatch(changeHoursOfOperation(hoursOfOperation));
    dispatch(changeTodaysHours(todaysHours));
    dispatch(changePriceRange(data.priceRange));
    dispatch(changeHealthScore(data.healthScore));
    dispatch(changeIsOpen(isOpen));
  });

export default fetch;