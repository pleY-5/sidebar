import React from 'react';
import CalendarWeek from './CalendarWeek.jsx';
import styles from '../sidebar.css';

const CalendarBody = ({ calendarWeeks }) => (
  <tbody>
    {calendarWeeks.map((week, idx) => (
      <CalendarWeek key={idx} calendarWeek={week}/>
    ))}
  </tbody>
);

export default CalendarBody;