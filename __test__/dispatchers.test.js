import fetch from '../client/action/fetch.js'
import { updateCalendarDate, updateSelectedDate } from '../client/action/updateDate.js'
import fetchMock from 'fetch-mock';

describe('Dispatchers', () => {

  const reducer = jest.fn().mockImplementation(action => {
    return { lastAction: action.type };
  });
  const store = {};
  store.dispatch = jest.fn().mockImplementation(callback => {
    return callback(data => reducer(data));
  });

  describe('fetch', () => {

    test('should be a function', () => {
      expect(typeof fetch('/restaurants/1')).toEqual('function');
    });
    test('should call mock reducer at least once', async () => {
      fetchMock.get('/restaurants/1', [{
        hasReservation: true,
        Monday: '7:00 am - 1:00 am',
        Tuesday: '7:00 am - 1:00 am',
        Wednesday: '7:00 am - 1:00 am',
        Thursday: '7:00 am - 1:00 am',
        Friday: '7:00 am - 1:00 am',
        Saturday: '7:00 am - 1:00 am',
        Sunday: '7:00 am - 1:00 am',
      }]);
      await store.dispatch(fetch('/restaurants/1'));
      expect(reducer).toBeCalled();
    });

  });

  describe('updateSelectedDate', () => {

    test('should return a function', () => {
      expect(typeof updateSelectedDate()).toBe('function');
    });
    test('should dispatch changeSelectedDate', () => {
      let result = store.dispatch(updateSelectedDate(new Date('September 20, 2018')));
      expect(reducer).toBeCalled();
      expect(result.lastAction).toBe('CHANGE_SELECTED_DATE');
    });

  });

  describe('updateCalendarDate', () => {

    test('should return a function', () => {
      expect(typeof updateCalendarDate()).toBe('function');
    });
    test('should dispatch changeSelectedDate', () => {
      let result = store.dispatch(updateCalendarDate(new Date('September 20, 2018')));
      expect(reducer).toBeCalled();
      expect(result.lastAction).toBe('CHANGE_CALENDAR_DATE');
    });

  });

});