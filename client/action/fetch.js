import get from '../service/fetch.js';
import { changeHasReservation, changeTimeslots, changeHoursOfOperation } from './reservation.js';
import { changeTodaysHours, changePriceRange, changeHealthScore } from './status.js';
import getTimeslots from './timeslots.js'

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
        dispatch(changeHasReservation(data.takesReservation));
        dispatch(changeTimeslots(getTimeslots(hoursOfOperation)));
        dispatch(changeHoursOfOperation(hoursOfOperation));
        dispatch(changeTodaysHours(hoursOfOperation[(new Date).getDay()]));
        dispatch(changePriceRange(data.priceRange));
        dispatch(changeHealthScore(data.healthScore));
      })
  };
};

export default fetch;