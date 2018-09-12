import hasReservation from '../client/action/hasReservation.js';
import currentDate from '../client/action/currentDate.js';
import timeslots from '../client/action/timeslots.js';

describe('Actions', () => {

  describe('hasReservation', () => {

    test('should be a function', () => {
      expect(typeof hasReservation).toBe('function');
    });
    test('should return an object', () => {
      expect(typeof hasReservation(true)).toBe('object');
    });
    test('should return object with "type" key to equal "CHANGE_HAS_RESERVATION"', () => {
      expect(hasReservation(true).type).toBe('CHANGE_HAS_RESERVATION');
    });
    test('should return object with "hasReservation" key to equal true', () => {
      expect(hasReservation(true).hasReservation).toBe(true);
    });

  });
 
  describe('currentDate', () => {

    test('should be a function', () => {
      expect(typeof currentDate).toBe('function');
    });
    test('should return an object', () => {
      expect(typeof currentDate('September 10, 2018')).toBe('object');
    });
    test('should return object with "type" key to equal "CHANGE_SELECTED_DATE"', () => {
      expect(currentDate('September 10, 2018').type).toBe('CHANGE_SELECTED_DATE');
    });
    test('should return object with "currentDate" key to equal true', () => {
      expect(currentDate('September 10, 2018').currentDate).toBe('September 10, 2018');
    });

  });

  describe('timeslots', () => {

    test('should be a function', () => {
      expect(typeof timeslots).toBe('function');
    });
    test('should return an object', () => {
      expect(typeof timeslots(['7:00 PM', '7:30 PM'])).toBe('object');
    });
    test('should return object with "type" key to equal "CHANGE_TIMESLOTS"', () => {
      expect(timeslots(['7:00 PM', '7:30 PM']).type).toBe('CHANGE_TIMESLOTS');
    });
    test('should return object with "timeslots" key to equal true', () => {
      expect(timeslots(['7:00 PM', '7:30 PM']).timeslots).toEqual(['7:00 PM', '7:30 PM']);
    });

  });

});