import React from 'react';
import { shallow } from 'enzyme';
import StatusHours from '../client/component/StatusHours.jsx';

describe('Status Window', () => {
  describe('Status Hours', () => {
    test('should have 3 parts in 1 line for a continuous time and restaurant is open', () => {
      const wrapper = shallow(<StatusHours hours='7:00 am - 10:00 pm' isOpen={true}/>);
      const tree = wrapper.find('#status-hours').children();
      expect(tree).toHaveLength(3);
    });
    test('should have 4 parts in 2 line for a break mid-day and restaurant is closed', () => {
      const wrapper = shallow(
        <StatusHours hours='7:00 am - 10:00 am, 2:00 pm - 10:00 pm' isOpen={false}/>
      );
      const tree = wrapper.find('#status-hours').children();
      expect(tree).toHaveLength(4);
    });
    test('should say Open now when restaurant is open', () => {
      const wrapper = shallow(
        <StatusHours hours='7:00 am - 10:00 am, 2:00 pm - 10:00 pm' isOpen={true}/>
      );
      const open = wrapper.find('span').text();
      expect(open).toBe('Open now');
    });
    test('should say Closed now when restaurant is closed', () => {
      const wrapper = shallow(<StatusHours hours='7:00 am - 10:00 pm' isOpen={false}/>);
      const close = wrapper.find('span').text();
      expect(close).toBe('Closed now');
    });
  });
});