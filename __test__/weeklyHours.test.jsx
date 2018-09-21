import React from 'react';
import { shallow } from 'enzyme';
import WeeklyHours from '../client/component/WeeklyHours';

describe('Weekly Hours Component Testing', () => {
  test('should have title Hours', () => {
    const wrapper = shallow(
      <WeeklyHours
        hoursOfOperation={[]}
        isOpen={false}
      />,
    );
    const title = wrapper.find('thead tr:first-child th').text();
    expect(title).toBe('Hours');
  });
  test('should contain correct hours', () => {
    const wrapper = shallow(
      <WeeklyHours
        hoursOfOperation={[
          '8:00 am - 2:00 pm, 5:00pm - 9:00 pm',
          '8:00 am - 2:00 pm, 5:00pm - 9:00 pm',
          '8:00 am - 2:00 pm, 5:00pm - 9:00 pm',
          '8:00 am - 2:00 pm, 5:00pm - 9:00 pm',
          '8:00 am - 2:00 pm, 5:00pm - 9:00 pm',
          '8:00 am - 9:00 pm',
          '8:00 am - 9:00 pm',
        ]}
        isOpen
      />,
    );
    const hours = wrapper.find('tbody tr td').at(1).text();
    expect(hours).toBe('8:00 am - 2:00 pm');
  });
});
