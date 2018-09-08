const fetchErrorReducer = (state = false, action) => {
  if (action.type === 'FETCH_ERROR') {
    return action.hasErrored;
  } else {
    return state;
  }
};

const loadingDataReducer = (state = false, action) => {
  if (action.type === 'LOADING_DATA') {
    return action.isLoading;
  } else {
    return state;
  }
};

const fetchSuccessReducer = (state = [], action) => {
  if (action.type === 'FETCH_SUCCESS') {
    return action.data;
  } else {
    return state;
  }
};

module.exports = {
  fetchErrorReducer,
  loadingDataReducer,
  fetchSuccessReducer
};