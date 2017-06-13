/*
  Configuring OAuth Client Password strategy to authenticate strategies
*/

import { Strategy as ClientPasswordStrategy } from 'passport-oauth2-client-password';
import { passport as dbPassport } from '../../db';
import unsupportedMessage from '../../db/unsupportedMessage';

export default (passport) => {
  if (!dbPassport || !dbPassport.client_password || ! typeof dbPassport.client_password === 'function') {
    console.warn(unsupportedMessage('passport-oauth2-client-password'));
    return;
  }

  passport.use(new ClientPasswordStrategy(dbPassport.client_password));
};
