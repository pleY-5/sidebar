const { createStore, applyMiddleware } = Redux;
const rootReducer = require('../reducers');

const store = createStore(rootReducer, applyMiddleware(ReduxThunk.default));

module.exports = store;