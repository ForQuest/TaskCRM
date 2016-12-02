/*
  Configuring Bearer strategy to authenticate strategies
*/

import { Strategy as BearerStrategy } from 'passport-http-bearer';
import { passport as dbPassport } from '../../db';
import unsupportedMessage from '../../db/unsupportedMessage';

export default (passport) => {
  if (!dbPassport || !dbPassport.bearer || ! typeof dbPassport.bearer === 'function') {
    console.warn(unsupportedMessage('passport-http-bearer'));
    return;
  }

  passport.use(new BearerStrategy(dbPassport.bearer));
};
