import React from 'react';
import PropTypes from 'prop-types';
import CalendarWeek from './CalendarWeek';

const CalendarBody = ({
  calendarWeeks,
  selectedDate,
  calendarDate,
  hoursOfOperation,
  handleDateClick,
}) => (
  <tbody>
    {calendarWeeks.map(week => (
      <CalendarWeek
        key={week}
        calendarWeek={week}
        selectedDate={selectedDate}
        calendarDate={calendarDate}
        hoursOfOperation={hoursOfOperation}
        handleDateClick={handleDateClick}
      />
    ))}
  </tbody>
);

export default CalendarBody;

CalendarBody.propTypes = {
  calendarWeeks: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.number)).isRequired,
  selectedDate: PropTypes.string.isRequired,
  calendarDate: PropTypes.instanceOf(Date).isRequired,
  hoursOfOperation: PropTypes.arrayOf(PropTypes.string).isRequired,
  handleDateClick: PropTypes.func.isRequired,
};
