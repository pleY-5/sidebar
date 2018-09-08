const fetchError = (bool) => {
  return {
    type: 'FETCH_ERROR',
    hasErrored: bool
  };
};

const loadingData = (bool) => {
  return {
    type: 'LOADING_DATA',
    isLoading: bool
  };
};

const fetchSuccess = (data) => {
  return {
    type: 'FETCH_SUCCESS',
    data
  };
};

module.exports = {
  fetchError,
  loadingData,
  fetchSuccess
};