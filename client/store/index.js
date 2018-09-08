const { createStore, applyMiddleware } = Redux;
const thunk = ReduxThunk;
const rootReducer = require('./../reducers');

const configureStore = (initialState) => {
  return createStore(
    rootReducer,
    initialState,
    applyMiddleware(thunk)
  );
};

module.exports = configureStore;