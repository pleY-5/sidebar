import get from '../client/service/fetch.js';
import fetchMock from 'fetch-mock';
import request from 'request';

describe('get request', () => {

  test('should be able to get mock data', () => {
    fetchMock.get('/restaurants/1', [{ hasReservation: true }]);
    get('/restaurants/1')
      .then(data => expect(data.hasReservation).toBe(true));
  });
  test('should be able to get a status code 200 from the server', () => {
    request('http://127.0.0.1:7878/restaurants/1', function (err, res, body) {
      if (err) { console.log(err); }
      expect(res.statusCode).toBe(200);
    });
  });
  test('should be able to get a id matching the query id', () => {
    request('http://127.0.0.1:7878/restaurants/1', function (err, res, body) {
      expect(JSON.parse(body)[0].id).toBe(1);
    });
    request('http://127.0.0.1:7878/restaurants/2', function (err, res, body) {
      expect(JSON.parse(body)[0].id).toBe(2);
    });
  });
  test('should be able to get a correct restaurant name', () => {
    request('http://127.0.0.1:7878/restaurants/1', function (err, res, body) {
      expect(JSON.parse(body)[0].name).toBe('Minhas Micro Brewery');
    });
  });

});