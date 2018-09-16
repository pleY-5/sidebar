const changeTodaysHours = (hours) => ({
  type: 'CHANGE_TODAYS_HOURS',
  hours
});

const changePriceRange = (priceRange) => ({
  type: 'CHANGE_PRICE_RANGE',
  priceRange
});

const changeHealthScore = (healthScore) => ({
  type: 'CHANGE_HEALTH_SCORE',
  healthScore
});

export { changeTodaysHours, changePriceRange, changeHealthScore };