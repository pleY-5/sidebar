const get = (url) => {
  return fetch(url)
    .then(response => response.json())
    .then(data => data[0])
    .catch(err => console.log(err));
};

export default get;