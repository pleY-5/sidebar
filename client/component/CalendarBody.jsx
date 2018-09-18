import React from 'react';
import CalendarWeek from './CalendarWeek.jsx';

const CalendarBody = ({
  calendarWeeks,
  selectedDate,
  calendarDate,
  hoursOfOperation,
  handleDateClick
}) => (
  <tbody>
    {calendarWeeks.map((week, idx) => (
      <CalendarWeek 
        key={idx} 
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