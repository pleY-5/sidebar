import React from 'react';
import { shallow } from 'enzyme';
import ReservationHeader from '../client/component/ReservationHeader.jsx';

describe('Reservation header contains correct text', () => {

  test('contains Make a Reservation', () => {
    const component = shallow(<ReservationHeader />);
    const text = component.find('span').text();
    expect(text).toBe('Make a Reservation');
  });
  
});