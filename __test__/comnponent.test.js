import React from 'react';
import { shallow, mount, render } from 'enzyme';
import Reservation from '../client/component/Reservation.jsx';
import ReservationHeader from '../client/component/ReservationHeader.jsx';
import FindTable from '../client/component/FindTable.jsx'
import NumOfPeopleSelect from '../client/component/NumOfPeopleSelect.jsx';
import DateSelect from '../client/component/DateSelect.jsx';
import TimeSelect from '../client/component/TimeSelect.jsx';

describe('React Component Testing', () => {

  describe('Reservation Header', () => {

    test('should contain text "Make a Reservation"', () => {
      const wrapper = shallow(<ReservationHeader/>);
      const text = wrapper.find('span').text();
      expect(text).toBe('Make a Reservation');
    });

  });

  describe('Find a Table Button', () => {

    test('should contain value "Find a Table"', () => {
      const wrapper = shallow(<FindTable/>);
      const value = wrapper.find('input[type="submit"]').prop('value');
      expect(value).toBe('Find a Table');
    });

  });

  describe('Number of People select', () => {

    test('should match previous snapshots', () => {
      const wrapper = shallow(<NumOfPeopleSelect/>);
      expect(wrapper).toMatchSnapshot();
    });

  });

  describe('Date select', () => {

    test('should match current date that was given as a prop', () => {
      const wrapper = shallow(<DateSelect currentDate='September 20, 2018'/>);
      const text = wrapper.find('option').text();
      expect(text).toBe('September 20, 2018');
    });

  });

  describe('Time select', () => {

    test('should have 3 options when given an array of 3 timeslots', () => {
      const wrapper = shallow(<TimeSelect timeslots={['7:00 PM', '7:30 PM', '8:00 PM']}/>);
      const select = wrapper.find('select').children();
      expect(select).toHaveLength(3);
    });

  });

  describe('Resevation', () => {

    test('should have 5 components in the reservation field', () => {
      const wrapper = shallow(<Reservation hasReservation='true' />);
      const label = wrapper.find('label').children();
      expect(label).toHaveLength(5);
    });

  });

});