const currentDateReducer = (state = '', action) => {
  if (action.type === 'CHANGE_CURRENT_DATE') {
    return action.currentDate;
  }
  return state;
};

export default currentDateReducer;