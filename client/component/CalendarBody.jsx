import React from 'react';
import CalendarWeek from './CalendarWeek.jsx';

const CalendarBody = ({ calendarWeeks, selectedDate, calendarDate, handleDateClick }) => (
  <tbody>
    {calendarWeeks.map((week, idx) => (
      <CalendarWeek 
        key={idx} 
        calendarWeek={week}
        selectedDate={selectedDate}
        calendarDate={calendarDate}
        handleDateClick={handleDateClick}
      />
    ))}
  </tbody>
);

export default CalendarBody;