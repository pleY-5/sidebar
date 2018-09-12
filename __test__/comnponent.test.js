import React from 'react';
import { shallow, mount, render } from 'enzyme';
import Reservation from '../client/component/Reservation.jsx';
import ReservationHeader from '../client/component/ReservationHeader.jsx';
import FindTable from '../client/component/FindTable.jsx';
import NumOfPeopleSelect from '../client/component/NumOfPeopleSelect.jsx';
import DateSelect from '../client/component/DateSelect.jsx';
import TimeSelect from '../client/component/TimeSelect.jsx';
import Calendar from '../client/component/Calendar.jsx';
import CalendarHeader from '../client/component/CalendarHeader.jsx';

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
      const text = wrapper.find('a').text();
      expect(text).toBe('Find a Table');
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
      const wrapper = shallow(<DateSelect selectedDate='September 20, 2018'/>);
      const text = wrapper.find('input[type="text"]').prop('value');
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

    test('should have 5 components in the reservation container field', () => {
      const wrapper = shallow(<Reservation hasReservation={true} />);
      const tree = wrapper.find('#reservation-container').children();
      expect(tree).toHaveLength(5); 
    });

  });

  describe('Calendar', () => {

    test('should have 2 components in the calendar container field', () => {
      const wrapper = shallow(<Calendar/>);
      const tree = wrapper.find('#calendar-container table').children();
      expect(tree).toHaveLength(2); // header, body
    });

    describe('Calendar Header', () => {

      test('should have title display :month, :year', () => {
        const wrapper = shallow(<CalendarHeader calendarDate={new Date('Wednesday, September 19, 2018')}/>);
        const title = wrapper.find('#calendar-header-title').text();
        expect(title).toBe('September 2018');
      });
      test('should contain a foward and back button', () => {
        const wrapper = shallow(<CalendarHeader calendarDate={new Date('Wednesday, September 19, 2018')}/>);
        const forward = wrapper.find('#forward').prop('value');
        expect(forward).toBeDefined();
        const back = wrapper.find('#back').prop('value');
        expect(back).toBeDefined();
      });
      test('should contain 7 days of the week', () => {
        const wrapper = shallow(<CalendarHeader calendarDate={new Date('Wednesday, September 19, 2018')}/>);
        const days = wrapper.find('#days').children();
        expect(days).toHaveLength(7);
      });

    });

  });

});