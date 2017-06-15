 import deserializeUser from './deserializeUser';
// import google from './google';
import local from './local';
import bearer from './bearer';
import client_password from './client_password';
import basic_http from './basic_http';

export { local, bearer };

export default {
  local,
  bearer,
  client_password,
  basic_http
};
