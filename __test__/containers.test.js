import React from 'react';
import store from '../client/store';
import { shallow } from 'enzyme';
import DateSelectContainer from '../client/container/DateSelectContainer.jsx';
import ReservationContainer from '../client/container/ReservationContainer.jsx';
import TimeSelectContainer from '../client/container/TimeSelectContainer.jsx';
import CalendarHeaderContainer from '../client/container/CalendarHeaderContainer.jsx';
import CalendarBodyContainer from '../client/container/CalendarBodyContainer.jsx';

describe('Container Testing', () => {

  describe('Date Select Container', () => {

    test('should contain a currentDate prop', () => {
      const wrapper = shallow(<DateSelectContainer store={store}/>);
      const props = wrapper.props();
      expect(props.selectedDate).toBeDefined();
    });
    test('should contain a displayCalendar prop', () => {
      const wrapper = shallow(<DateSelectContainer store={store}/>);
      const props = wrapper.props();
      expect(props.displayCalendar).toBeDefined();
    });
    test('should contain a handler for click date div', () => {
      const wrapper = shallow(<DateSelectContainer store={store}/>);
      const props = wrapper.props();
      expect(props.handleDateClick).toBeDefined();
      expect(typeof props.handleDateClick).toBe('function');
    });
    test('should contain a handler that returns an action object', () => {
      const wrapper = shallow(<DateSelectContainer store={store}/>);
      const props = wrapper.props();
      expect(props.handleDateClick).toBeDefined();
      expect(typeof props.handleDateClick()).toBe('object');
    });


  });

  describe('Reservation Container', () => {

    test('should contain a hasReservation prop', () => {
      const wrapper = shallow(<ReservationContainer store={store}/>);
      const props = wrapper.props();
      expect(props.hasReservation).toBeDefined();
    });

  });

  describe('Time Select Container', () => {

    test('should contain a timeslots prop', () => {
      const wrapper = shallow(<TimeSelectContainer store={store}/>);
      const props = wrapper.props();
      expect(props.timeslots).toBeDefined();
    });

  });

  describe('Calendar Header Container', () => {

    test('should contain a calendarDate prop', () => {
      const wrapper = shallow(<CalendarHeaderContainer store={store}/>);
      const props = wrapper.props();
      expect(props.calendarDate).toBeDefined();
    });
    test('should contains month increase and decrease functions', () => {
      const wrapper = shallow(<CalendarHeaderContainer store={store}/>);
      const props = wrapper.props();
      expect(typeof props.handleDecreaseMonthClick).toBe('function');
      expect(typeof props.handleIncreaseMonthClick).toBe('function');
    });
    test('should return action objects', () => {
      const wrapper = shallow(<CalendarHeaderContainer store={store}/>);
      const props = wrapper.props();
      expect(typeof props.handleDecreaseMonthClick(new Date)).toBe('object');
      expect(props.handleDecreaseMonthClick(new Date).type).toBeDefined();
      expect(typeof props.handleIncreaseMonthClick(new Date)).toBe('object');
      expect(props.handleIncreaseMonthClick(new Date).type).toBeDefined();
    });

  });

  describe('Calendar Body Container', () => {
  
    test('should contain a calendarWeeks prop', () => {
      const wrapper = shallow(<CalendarBodyContainer store={store}/>);
      const props = wrapper.props();
      expect(props.calendarWeeks).toBeDefined();
    });
    test('should contain a selectedDate prop', () => {
      const wrapper = shallow(<CalendarBodyContainer store={store}/>);
      const props = wrapper.props();
      expect(props.selectedDate).toBeDefined();
    });
    test('should contain a calendarDate prop', () => {
      const wrapper = shallow(<CalendarBodyContainer store={store}/>);
      const props = wrapper.props();
      expect(props.calendarDate).toBeDefined();
    });
  
  });

});
