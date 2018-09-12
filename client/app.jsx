import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';
import Sidebar from './component/Sidebar.jsx';

// console.log('this is connected');

ReactDOM.render(
  <Provider store={store}>
    <Sidebar/>
  </Provider>,
  document.getElementById('app')
);