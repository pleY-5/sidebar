const hasReservationReducer = (state = false, action) => {
  if (action.type === 'CHANGE_HAS_RESERVATION') {
    return action.hasReservation;
  }
  return state;
};

export default hasReservationReducer;