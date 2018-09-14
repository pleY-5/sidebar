import React from 'react';
import CalendarWeek from './CalendarWeek.jsx';

const CalendarBody = ({ calendarWeeks, selectedDate, calendarDate }) => (
  <tbody>
    {calendarWeeks.map((week, idx) => (
      <CalendarWeek 
        key={idx} 
        calendarWeek={week}
        selectedDate={selectedDate}
        calendarDate={calendarDate}
      />
    ))}
  </tbody>
);

export default CalendarBody;