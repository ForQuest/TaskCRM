import React from 'react';
import axios from 'axios';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Router, browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import routes from 'routes';
import * as types from 'types';
import configureStore from 'store/configureStore';
import preRenderMiddleware from 'middlewares/preRenderMiddleware';
import { loadState, saveState } from 'store/localStorage';
import { baseURL, basicauth } from 'config/app';


// configure baseURL for axios requests (for serverside API calls)
axios.defaults.baseURL = baseURL;
console.log(__DEVSERVER__);
console.log(__DEVCLIENT__);
axios.defaults.headers.common['Authorization'] = 'Basic ' + basicauth;

// Grab the state from a global injected into
// server-generated HTML
const initialState = loadState();

const store = configureStore(initialState, browserHistory);

store.subscribe(() => saveState({ user: store.getState().user }));

const history = syncHistoryWithStore(browserHistory, store);

render(
  <Provider store={store}>
    <Router history={history}>
      {routes}
    </Router>
  </Provider>, 
  document.getElementById('app')
);
