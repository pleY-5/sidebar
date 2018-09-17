const todaysHoursReducer = (state = '', action) => {
  if (action.type === 'CHANGE_TODAYS_HOURS') {
    return action.hours;
  }
  return state;
};

const priceRangeReducer = (state = null, action) => {
  if (action.type === 'CHANGE_PRICE_RANGE') {
    return action.priceRange;
  }
  return state;
};

const healthScoreReducer = (state = null, action) => {
  if (action.type === 'CHANGE_HEALTH_SCORE') {
    return action.healthScore;
  }
  return state;
};

export { todaysHoursReducer, priceRangeReducer, healthScoreReducer };