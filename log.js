module.exports = {
  setJSONBody,
  logHeaders,
};

function setJSONBody(requestParams, context, ee, next) {
  console.log(requestParams);
  return next(); // MUST be called for the scenario to continue
}

function logHeaders(requestParams, response, context, ee, next) {
  console.log(response.body);
  return next(); // MUST be called for the scenario to continue
}
