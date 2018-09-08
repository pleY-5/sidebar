const fetchSuccessReducer = (state = [], action) => {
  if (action.type === 'GET_DATA') {
    return action.data;
  } else {
    return state;
  }
};

module.exports = {
  restaurantData: fetchSuccessReducer
};