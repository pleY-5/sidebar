const timeslotsReducer = (state = [], action) => {
  if (action.type === 'CHANGE_TIMESLOTS') {
    return action.timeslots;
  }
  return state;
};

export default timeslotsReducer;