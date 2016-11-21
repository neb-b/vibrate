import React from 'react'
import ReactDOM from 'react-dom'
import Routes from './routes'
import reducer from './redux/reducers'
import './style/index.css'

import { Provider } from 'react-redux'
import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import promise from 'redux-promise';
import createLogger from 'redux-logger';

const logger = createLogger();
const store = createStore(
  reducer,
  applyMiddleware(thunk, promise, logger)
);

ReactDOM.render(
  <Provider store={store}>
    <Routes />
  </Provider>,
  document.getElementById('root')
)
