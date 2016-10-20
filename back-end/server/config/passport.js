/* Initializing passport.js */
import passport from 'passport';
import local from './passport/local';
import bearer from './passport/bearer';
import basic_http from './passport/basic_http';
import client_password from './passport/client_password';
import google from './passport/google';
import { passport as dbPassport } from '../db';
import unsupportedMessage from '../db/unsupportedMessage';

export default () => {
  // Configure Passport authenticated session persistence.
  //
  // In order to restore authentication state across HTTP requests, Passport needs
  // to serialize users into and deserialize users out of the session.  The
  // typical implementation of this is as simple as supplying the user ID when
  // serializing, and querying the user record by ID from the database when
  // deserializing.

  // use the following strategies
  local(passport);
  bearer(passport);
  basic_http(passport);
  client_password(passport);
  // google(passport);
};
