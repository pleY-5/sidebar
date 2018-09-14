import hasReservation from '../client/action/hasReservation.js';
import selectedDate from '../client/action/selectedDate.js';
import { changeCalendarDate, changeCalendarWeeks, changeDisplayCalendar } from '../client/action/calendar.js';
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
 
  describe('selectedDate', () => {

    test('should be a function', () => {
      expect(typeof selectedDate).toBe('function');
    });
    test('should return an object', () => {
      expect(typeof selectedDate('September 10, 2018')).toBe('object');
    });
    test('should return object with "type" key to equal "CHANGE_SELECTED_DATE"', () => {
      expect(selectedDate('September 10, 2018').type).toBe('CHANGE_SELECTED_DATE');
    });
    test('should return object with "selectedDate" key to equal true', () => {
      expect(selectedDate('September 10, 2018').selectedDate).toBe('September 10, 2018');
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

  describe('calendar', () => {

    describe('changeCalendarDate', () => {

      test('should be a function', () => {
        expect(typeof changeCalendarDate).toBe('function');
      });
      test('should return an object', () => {
        expect(typeof changeCalendarDate()).toBe('object');
      });
      test('should return object with "type" key to equal "CHANGE_CALENDAR_DATE"', () => {
        expect(changeCalendarDate().type).toBe('CHANGE_CALENDAR_DATE');
      });
      test('should return object with "changeCalendarDate" key to equal true', () => {
        const date = new Date();
        expect(changeCalendarDate(date).calendarDate).toEqual(date);
      });

    });

    describe('changeCalendarWeeks', () => {

      test('should be a function', () => {
        expect(typeof changeCalendarWeeks).toBe('function');
      });
      test('should return an object', () => {
        expect(typeof changeCalendarWeeks()).toBe('object');
      });
      test('should return object with "type" key to equal "CHANGE_CALENDAR_WEEKS"', () => {
        expect(changeCalendarWeeks().type).toBe('CHANGE_CALENDAR_WEEKS');
      });
      test('should return object with "changeCalendarWeeks" key to equal true', () => {
        const date = new Date();
        expect(changeCalendarWeeks(date).calendarWeeks).toEqual(date);
      });

    });

    describe('changeDisplayCalendar', () => {

      test('should be a function', () => {
        expect(typeof changeDisplayCalendar).toBe('function');
      });
      test('should return an object', () => {
        expect(typeof changeDisplayCalendar()).toBe('object');
      });
      test('should return object with "type" key to equal "CHANGE_DISPLAY_CALENDAR"', () => {
        expect(changeDisplayCalendar().type).toBe('CHANGE_DISPLAY_CALENDAR');
      });
      test('should return object with "changeDisplayCalendar" key to equal true', () => {
        expect(changeDisplayCalendar(true).displayCalendar).toEqual(true);
      });

    });

  });

});