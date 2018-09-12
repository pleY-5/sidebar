const selectedDateReducer = (state = '', action) => {
  if (action.type === 'CHANGE_SELECTED_DATE') {
    return action.selectedDate;
  }
  return state;
};

export default selectedDateReducer;