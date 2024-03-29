import React from 'react';
import ReactDOM from 'react-dom';
//redux
import { Provider } from 'react-redux'
import {createStore, applyMiddleware, compose } from 'redux'; //createStore is deprecated but allowed for learning purposes
import thunk from 'redux-thunk'

import reducers from './reducers';

import App from './App';
import './index.css';

const store = createStore(reducers, compose(applyMiddleware(thunk)))

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);


