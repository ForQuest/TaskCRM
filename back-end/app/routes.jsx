import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from 'containers/App';
import Vote from 'containers/Vote';
import About from 'containers/About';
import LoginOrRegister from 'containers/LoginOrRegister';
import Dashboard from 'containers/Dashboard';
import requireAuthentication from 'components/AuthenticatedComponent'
import { makeRequest } from 'services';
import axios from 'axios';

// export default (store) => {
//   const fetchVoteData = () => {
//     const { user: { access_token }} = store.getState();
//     console.log('==>'+access_token);
//     if(!access_token) return Promise.resolve();
//     const config = {
//       headers: {'Authorization': 'Bearer ' + access_token}
//     };
//     return axios.get('/api/topic', config)
//       .then(res => res.data)
//       .catch(res => Array(res.response && res.response.data && res.response.data.message));
//   }

//   return (
//     <Route path="/" component={App}>
//       <IndexRoute component={requireAuthentication(Vote)} fetchData={fetchVoteData} />
//       <Route path="login" component={LoginOrRegister} />
//       <Route path="dashboard" component={requireAuthentication(Dashboard)} />
//       <Route path="about" component={requireAuthentication(About)} />
//     </Route>
//   );
// };

export default (
  <Route path="/" component={App}>
    <IndexRoute component={requireAuthentication(Vote)} />
    <Route path="login" component={LoginOrRegister} />
    <Route path="dashboard" component={requireAuthentication(Dashboard)} />
    <Route path="about" component={requireAuthentication(About)} />
  </Route>
);