import selectedDateReducer from '../client/reducers/selectedDate.js';
import hasReservationReducer from '../client/reducers/hasReservation.js';
import timeslotsReducer from '../client/reducers/timeslots.js';
import { calendarDateReducer, calendarWeeksReducer, displayCalendarReducer } from '../client/reducers/calendar.js';
import rootReducer from '../client/reducers';
import changeDate from '../client/action/selectedDate';
import changeReservation from '../client/action/hasReservation.js';
import changeTime from '../client/action/timeslots.js';
import { changeCalendarDate, changeCalendarWeeks, changeDisplayCalendar } from '../client/action/calendar.js';

describe('Reducers', () => {
  describe('rootReducer', () => {
    test('should be a function and accept an action', () => {
      expect(typeof rootReducer).toBe('function');
      expect(rootReducer(undefined, {})).toBeDefined();
    });
    test('should have a default state of an object', () => {
      expect(typeof rootReducer(undefined, {})).toBe('object');
    });
    test('should have a state for each reducer', () => {
      expect(rootReducer(undefined, {}).selectedDate).toBeDefined();
      expect(rootReducer(undefined, {}).calendarDate).toBeDefined();
      expect(rootReducer(undefined, {}).calendarWeeks).toBeDefined();
      expect(rootReducer(undefined, {}).timeslots).toBeDefined();
      expect(rootReducer(undefined, {}).hasReservation).toBeDefined();
      expect(rootReducer(undefined, {}).displayCalendar).toBeDefined();
    });
  });

  describe('selectedDate', () => {
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

  describe('calendar', () => {
    describe('calendarDate', () => {
      test('should have a default state of empty string', () => {
        expect(calendarDateReducer(undefined, { type: null })).toBe('');
      });
      test('should change state when given "CHANGE_CALENDAR_DATE" action', () => {
        expect(calendarDateReducer(undefined, changeCalendarDate('September 20, 2018'))).toBe('September 20, 2018');
      });
    });

    describe('calendarWeeks', () => {
      test('should have a default state of empty array', () => {
        expect(calendarWeeksReducer(undefined, { type: null })).toEqual([]);
      });
      test('should change state when given "CHANGE_CALENDAR_WEEKS" action', () => {
        expect(calendarWeeksReducer(undefined, changeCalendarWeeks([1, 2, 3, 4, 5, 6, 7]))).toEqual([1, 2, 3, 4, 5, 6, 7]);
      });
    });

    describe('displayCalendar', () => {
      test('should have a default state of false', () => {
        expect(displayCalendarReducer(undefined, { type: null })).toEqual(false);
      });
      test('should change state when given "CHANGE_DISPLAY_CALENDAR" action', () => {
        expect(displayCalendarReducer(undefined, changeDisplayCalendar(true))).toBe(true);
      });
    });
  });
});
