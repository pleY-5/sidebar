console.log('This is connected');
const store = require('./store');
const { Provider } = ReactRedux;

const Sidebar = () => {
  
  return (
    <h1>Hello World</h1>
  );
};

ReactDOM.render(
  <Provider store={store}>
    <Sidebar />
  </Provider>, 
  document.getElementById('sidebar')
);