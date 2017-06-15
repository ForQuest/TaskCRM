/*
  Configuring Basic HTTP strategy to authenticate strategies
*/

import { BasicStrategy } from 'passport-http';
import { passport as dbPassport } from '../../db';
import unsupportedMessage from '../../db/unsupportedMessage';

export default (passport) => {
  if (!dbPassport || !dbPassport.basic_http || ! typeof dbPassport.basic_http === 'function') {
    console.warn(unsupportedMessage('passport-http'));
    return;
  }

  passport.use(new BasicStrategy(dbPassport.basic_http));
};
