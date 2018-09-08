console.log('This is connected');
const { Provider } = ReactRedux;
const store = require('./store');
const Sidebar = require('./component/Sidebar.jsx');

ReactDOM.render(
  <Provider store={store}>
    <Sidebar/>
  </Provider>, 
  document.getElementById('app')
);