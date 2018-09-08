const fetchError = (bool) => ({
  type: 'FETCH_ERROR',
  hasErrored: bool
});

const loadingData = (bool) => ({
  type: 'LOADING_DATA',
  isLoading: bool
});

const fetchSuccess = (data) => ({
  type: 'FETCH_SUCCESS',
  data
});

module.exports = {
  fetchError,
  loadingData,
  fetchSuccess
};