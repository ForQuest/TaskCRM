import axios from 'axios';
import React from 'react';
import { renderToString } from 'react-dom/server';
import { createMemoryHistory, RouterContext, match } from 'react-router';
import { Provider } from 'react-redux';
import routes from 'routes';
import configureStore from 'store/configureStore';
import * as types from 'types';
import preRenderMiddleware from 'middlewares/preRenderMiddleware';
import header from 'components/Meta';
import { loadState, saveState } from 'store/localStorage';

const clientConfig = {
  host: process.env.HOSTNAME || 'localhost',
  port: process.env.PORT || '3000'
};

// configure baseURL for axios requests (for serverside API calls)
let auth = new Buffer('web:websecret');
axios.defaults.baseURL = `http://${clientConfig.host}:${clientConfig.port}`;
axios.defaults.headers.common['Authorization'] = 'Basic ' + auth.toString('base64');

const renderFullPage = (html, initialState = ``) => {
  let localState = initialState?`<div id='conf'><script>if(window.localStorage.getItem('state')){document.getElementById('conf').remove()}else{window.localStorage.setItem('state', '${JSON.stringify(initialState)}')}</script></div>`:``;
  return `
    <!doctype html>
      <html ${header.htmlAttributes.toString()}>
        <head>
          ${header.title.toString()}
          ${header.meta.toString()}
          ${header.link.toString()}
        </head>
        <body>
          <div id="app">${html}</div>
          ${localState}
          <script type="text/javascript" charset="utf-8" src="/assets/app.js"></script>
        </body>
      </html>
  `;
}

export default function render(req, res) {
  let initialState = {
      user: {
        authenticated: false,
        isWaiting: false,
        message: ''
      }
    };
  res.status(200).send( renderFullPage(``, initialState) );
  // let store = loadState();
  // let history = createMemoryHistory();
  // let initialState = {
  //     user: {
  //       authenticated: false,
  //       isWaiting: false,
  //       message: ''
  //     }
  //   };
  // if( store === undefined ) {
  //   store = configureStore(initialState, history);
  //   saveState(store.getState());
  // }


  // match({routes, location: req.url}, (err, redirect, props) => {
  //   if (err) {
  //     res.status(500).json(err);
  //   } else if (redirect) {
  //     res.redirect(302, redirect.pathname + redirect.search);
  //   } else if (props) {
  //     // This method waits for all render component
  //     // promises to resolve before returning to browser
  //     store.dispatch({ type: types.CREATE_REQUEST });

  //     preRenderMiddleware(props)
  //     .then(data => {
  //       store.dispatch({ type: types.REQUEST_SUCCESS, data });
  //       const componentHTML = renderToString(
  //         <Provider store={store}>
  //           <RouterContext {...props} />
  //         </Provider>
  //       );

  //       res.status(200).send( renderFullPage(componentHTML, initialState) );
  //     })
  //     .catch(err => {
  //       console.error(err);
  //       res.status(500).json(err);
  //     });
  //   } else {
  //     res.sendStatus(404);
  //   }
  // });
}