const get = (url, cb) => {
  fetch(url)
    .then(response => response.json())
    .then(data => cb(data[0]))
    .catch(err => console.log(err));
}

// const post = (url, data, cb) => {

// }

export default get;