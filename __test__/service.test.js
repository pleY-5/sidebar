import get from '../client/service/fetch.js';
import fetchMock from 'fetch-mock';

describe('get request', () => {

  test('should be able to get mock data', () => {
    fetchMock.get('/restaurant?id=1', [{ hasReservation: true }]);
    get('/restaurant?id=1')
      .then(data => expect(data.hasReservation).toEqual(true));
  });

});