import React from 'react';
import { shallow, mount } from 'enzyme';
import renderer from 'react-test-renderer';
import ReservationHeader from '../client/component/ReservationHeader.jsx';
import FindTable from '../client/component/FindTable.jsx'
import NumOfPeopleSelect from '../client/component/NumOfPeopleSelect.jsx';
import App from '../client/App.jsx'

describe('React Component Testing', () => {

  describe('Reservation Header', () => {

    test('should contain text "Make a Reservation"', () => {
      const component = shallow(<ReservationHeader />);
      const text = component.find('span').text();
      expect(text).toBe('Make a Reservation');
    });

  });

  describe('Find a Table Button', () => {

    test('should contain value "Find a Table"', () => {
      const component = shallow(<FindTable />);
      const value = component.find('input[type="submit"]').props().value;
      expect(value).toBe('Find a Table');
    });

  });

  describe('Number of People select', () => {

    test('should match previous snapshots', () => {
      const component = shallow(<NumOfPeopleSelect />);
      const tree = renderer.create(component).toJSON();
      expect(tree).toMatchSnapshot();
    });

  });

  // describe('Mount App', () => {

  //   test('should match previous snapshots', () => {
  //     const app = mount(<App />);
  //     expect(app).toBe('something')
  //   });

  // });

});