import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';
import Sidebar from './component/Sidebar.jsx';

const App = () => (
  <Provider store={store}>
    <Sidebar/>
  </Provider>
);

ReactDOM.render(
  <App/>,
  document.getElementById('app')
);