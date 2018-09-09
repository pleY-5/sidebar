const currentDateReducer = (state = '', action) => {
  console.log(action)
  if (action.type === 'CHANGE_CURRENT_DATE') {
    console.log(action.currentDate)
    return action.currentDate;
  }
  return state;
};

export default currentDateReducer;