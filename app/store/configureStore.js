import { createStore, applyMiddleware, compose } from 'redux';
import { reduxReactRouter } from 'redux-router';
import thunk from 'redux-thunk';
import createLogger from 'redux-logger';

import routes from '../routes';
import rootReducer from 'reducers';
import promiseMiddleware from 'middlewares/promiseMiddleware';
import requestMiddleware from 'middlewares/requestMiddleware';

/*
 * @param {Object} initial state to bootstrap our stores with for server-side rendering
 * @param {History Object} a history object. We use `createMemoryHistory` for server-side rendering,
 *                          while using browserHistory for client-side
 *                          rendering.
 */
export default function configureStore(initialState, history) {
  // Installs hooks that always keep react-router and redux store in sync
  const middleware = [thunk, promiseMiddleware, requestMiddleware ];
  let createStoreWithMiddleware;

  if (__DEVCLIENT__) {
    middleware.push(createLogger({
      predicate: (getState, action) => action.type !== 'TICK_EVENT',
      // collapsed: (getState, action) => action.type === 'TICK_EVENT'
    }));
    createStoreWithMiddleware = compose(
      applyMiddleware(...middleware),
      reduxReactRouter({routes, history}),
      typeof window === 'object' && typeof window.devToolsExtension !== 'undefined' ? window.devToolsExtension() : f => f
    );
  } else {
    createStoreWithMiddleware = compose(
      applyMiddleware(...middleware),
      reduxReactRouter({routes, history})
    );
  }

  const store = createStoreWithMiddleware(createStore)(rootReducer, initialState);

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('reducers', () => {
      const nextReducer = require('reducers');
      store.replaceReducer(nextReducer);
    });
  }

  return store;
}