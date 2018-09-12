import selectedDateReducer from '../client/reducers/selectedDate.js';
import hasReservationReducer from '../client/reducers/hasReservation.js';
import timeslotsReducer from '../client/reducers/timeslots.js';
import changeDate from '../client/action/selectedDate';
import changeReservation from '../client/action/hasReservation.js';
import changeTime from '../client/action/timeslots.js';

describe('Reducers', () => {

  describe('currentDate', () => {

    test('should have a default state of empty string', () => {
      expect(selectedDateReducer(undefined, { type: null })).toBe('');
    });
    test('should change state when given "CHANGE_CURRENT_DATE" action', () => {
      expect(selectedDateReducer(undefined, changeDate('September 20, 2018'))).toBe('September 20, 2018');
    });

  });

  describe('hasReservation', () => {

    test('should have a default state of false', () => {
      expect(hasReservationReducer(undefined, { type: null })).toEqual(false);
    });
    test('should change state when given "CHANGE_HAS_RESERVATION', () => {
      expect(hasReservationReducer(undefined, changeReservation(true))).toBe(true);
    });
    
  });

  describe('timeSlots', () => {

    test('should have a default state of empty array', () => {
      expect(timeslotsReducer(undefined, { type: null })).toEqual([]);
    });
    test('should change state when given "CHANGE_TIMESLOTS" action', () => {
      expect(timeslotsReducer(undefined, changeTime(['8:00 PM']))).toEqual(['8:00 PM']);
    });
    
  });

});