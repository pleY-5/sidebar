console.log('This is connected');
const { Provider } = ReactRedux;
const { configureStore } = require('./store');
const store = configureStore();
const Sidebar = require('./component/Sidebar.jsx');

ReactDOM.render(
  <Provider store={store}>
    <Sidebar />
  </Provider>, 
  document.getElementById('app')
);