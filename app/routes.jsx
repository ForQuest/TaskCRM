import React from 'react';
import { Route, IndexRoute } from 'react-router';
import { App, Vote, Dashboard, About, LoginOrRegister } from 'pages';
import requireAuthentication from 'components/AuthenticatedComponent';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={requireAuthentication(Vote)} />
    <Route path="login" component={LoginOrRegister} />
    <Route path="dashboard" component={requireAuthentication(Dashboard)} />
    <Route path="about" component={requireAuthentication(About)} />
  </Route>
);