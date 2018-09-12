import React from 'react';
import store from '../client/store';
import { shallow } from 'enzyme';
import DateSelectContainer from '../client/container/DateSelectContainer.jsx';
import ReservationContainer from '../client/container/ReservationContainer.jsx';
import TimeSelectContainer from '../client/container/TimeSelectContainer.jsx';

describe('Container Testing', () => {

  describe('Date Select Container', () => {

    test('should contain contain a currentDate prop', () => {
      const wrapper = shallow(<DateSelectContainer store={store}/>);
      const props = wrapper.props();
      expect(props.selectedDate).toBeDefined();
    });

  });

  describe('Reservation Container', () => {

    test('should contain contain a hasReservation prop', () => {
      const wrapper = shallow(<ReservationContainer store={store}/>);
      const props = wrapper.props();
      expect(props.hasReservation).toBeDefined();
    });

  });

  describe('Time Select Container', () => {

    test('should contain contain a timeslots prop', () => {
      const wrapper = shallow(<TimeSelectContainer store={store}/>);
      const props = wrapper.props();
      expect(props.timeslots).toBeDefined();
    });

  });
});