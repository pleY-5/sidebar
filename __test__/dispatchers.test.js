import fetch from '../client/action/fetch.js'
import updateDate from '../client/action/updateDate.js'
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
        Monday: '7:00 PM - 8:00 PM',
        Tuesday: '7:00 PM - 8:00 PM',
        Wednesday: '7:00 PM - 8:00 PM',
        Thursday: '7:00 PM - 8:00 PM',
        Friday: '7:00 PM - 8:00 PM',
        Saturday: '7:00 PM - 8:00 PM',
        Sunday: '7:00 PM - 8:00 PM',
      }]);
      await store.dispatch(fetch('/restaurants/1'));
      expect(reducer).toBeCalled();
    });

  });

  describe('updateDate', () => {

    test('should return a function', () => {
      expect(typeof updateDate()).toBe('function');
    });
    test('should dispatch changeSelectedDate', () => {
      let result = store.dispatch(updateDate(new Date('September 20, 2018')));
      expect(reducer).toBeCalled();
      expect(result.lastAction).toBe('CHANGE_SELECTED_DATE');
    });

  });

});