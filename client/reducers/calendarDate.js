const calendarDateReducer = (state = '', action) => {
  if (action.type === 'CHANGE_CALENDAR_DATE') {
    return action.calendarDate;
  }
  return state;
};

export default calendarDateReducer;