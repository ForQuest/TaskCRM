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


let auth = new Buffer('web:websecret');
axios.defaults.headers.common['Authorization'] = 'Basic ' + auth.toString('base64');

// Grab the state from a global injected into
// server-generated HTML
const initialState = loadState();

const store = configureStore(initialState, browserHistory);

store.subscribe(() => {
  saveState(store.getState());
});

const history = syncHistoryWithStore(browserHistory, store);

/**
 * Callback function handling frontend route changes.
 */
function onUpdate() {
  // store.dispatch({ type: types.CREATE_REQUEST });
  // preRenderMiddleware(this.state)
  //   .then(data => {
  //     return store.dispatch({ type: types.REQUEST_SUCCESS, data });
  //   });
}


// Router converts <Route> element hierarchy to a route config:
// Read more https://github.com/rackt/react-router/blob/latest/docs/Glossary.md#routeconfig
render(
  <Provider store={store}>
    <Router history={history} onUpdate={onUpdate}>
      {routes}
    </Router>
  </Provider>, document.getElementById('app'));
