import { createStore, applyMiddleware, compose } from 'redux';
import { routerMiddleware } from 'react-router-redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';

import routes from '../routes';
import rootReducer from 'reducers';
import promiseMiddleware from 'middlewares/promiseMiddleware';
import requestMiddleware from 'middlewares/requestMiddleware';
import tickMiddleware from 'middlewares/tickMiddleware';
import { isClient, isDebug } from '../../config/app';
import * as types from 'types';

/*
 * @param {Object} initial state to bootstrap our stores with for server-side rendering
 * @param {History Object} a history object. We use `createMemoryHistory` for server-side rendering,
 *                          while using browserHistory for client-side
 *                          rendering.
 */
export default function configureStore(initialState, history) {
  // Installs hooks that always keep react-router and redux store in sync
  const middleware = [thunk, tickMiddleware, requestMiddleware, promiseMiddleware ];
  let store;

  if (isClient && isDebug) {
    middleware.push(createLogger({
      predicate: (getState, action) => action.type !== types.TICK_EVENT &&
                                       action.type !== types.TICK_START &&
                                       action.type !== types.TICK_STOP
      // collapsed: (getState, action) => action.type === 'TICK_EVENT'
    }));
    store = createStore(rootReducer, initialState, compose(
      applyMiddleware(...middleware),
      typeof window === 'object' && typeof window.devToolsExtension !== 'undefined' ? window.devToolsExtension() : f => f
    ));
  } else {
    store = createStore(rootReducer, initialState, compose( applyMiddleware(...middleware), f => f ));
  }

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('reducers', () => {
      const nextReducer = require('reducers');
      store.replaceReducer(nextReducer);
    });
  }

  return store;
}