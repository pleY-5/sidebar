import currentDateReducer from '../client/reducers/currentDate.js';
import hasReservationReducer from '../client/reducers/hasReservation.js';
import timeslotsReducer from '../client/reducers/timeslots.js';
import changeDate from '../client/action/currentDate.js'
import changeReservation from '../client/action/hasReservation.js';
import changeTime from '../client/action/timeslots.js';

describe('Reducers', () => {

  describe('currentDate', () => {

    test('default state of empty string', () => {
      expect(currentDateReducer(undefined, { type: null })).toBe('');
    });
    test('default state of empty string', () => {
      expect(currentDateReducer(undefined, changeDate('September 20, 2018'))).toBe('September 20, 2018');
    });

  });

  describe('hasReservation', () => {

    test('default state of empty string', () => {
      expect(hasReservationReducer(undefined, { type: null })).toEqual(false);
    });
    test('default state of empty string', () => {
      expect(hasReservationReducer(undefined, changeReservation(true))).toEqual(true);
    });
    
  });

  describe('currentDate', () => {

    test('default state of empty string', () => {
      expect(timeslotsReducer(undefined, { type: null })).toEqual([]);
    });
    test('default state of empty string', () => {
      expect(timeslotsReducer(undefined, changeTime(['8:00 PM']))).toEqual(['8:00 PM']);
    });
    
  });

});