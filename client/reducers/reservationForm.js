const reservationFormReducer = (state = false, action) => {
  if (action.type === 'CHANGE_RESERVATION_FORM') {
    return action.reservationForm;
  }
  return state;
};

export default reservationFormReducer;