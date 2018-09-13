const changeCalendarDate = (calendarDate) => ({
  type: 'CHANGE_CALENDAR_DATE',
  calendarDate
});

const changeCalendarWeeks = (calendarWeeks) => ({
  type: 'CHANGE_CALENDAR_WEEKS',
  calendarWeeks
});

export { changeCalendarDate, changeCalendarWeeks };