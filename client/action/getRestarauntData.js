const fetchSuccess = (data) => ({
  type: 'GET_DATA',
  data
});

const fetchData = (url) => {
  return dispatch => {
    fetch(url)
      .then(response => response.json())
      .then(data => dispatch(fetchSuccess(data[0])))
      .catch(err => console.log(err));
  }
};

module.exports = {
  fetchData
};