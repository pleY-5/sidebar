import get from '../client/service/fetch.js';
import fetchMock from 'fetch-mock';

describe('get request', () => {

  test('should be able to get mock data', async () => {
    fetchMock.get('/restaurant?id=1', [{ hasReservation: true }]);
    let result = await get('/restaurant?id=1');
    expect(result.hasReservation).toEqual(true)
  });

});