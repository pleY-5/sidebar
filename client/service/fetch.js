const get = (url) => {
  return fetch(url)
    .then(response => response.json())
    .then(data => data[0])
    .catch(err => console.log(err));
}

// const post = (url, data, cb) => {

// }

export default get;