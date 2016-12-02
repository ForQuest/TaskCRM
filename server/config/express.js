import express from 'express';
import passport from 'passport';
import bodyParser from 'body-parser';
import path from 'path';
import methodOverride from 'method-override';
import unsupportedMessage from '../db/unsupportedMessage';
import { sessionSecret } from './secrets';
import { DB_TYPE, ENV } from './appConfig';
import { session as dbSession } from '../db';
import gzip from 'compression';
import helmet from 'helmet';


export default (app) => {

  app.set('port', (process.env.PORT || 3000));
  app.set('sslport', (ENV === 'production'?443:3443));

  if (ENV === 'production') {
    app.use(gzip());
    // Secure your Express apps by setting various HTTP headers. Documentation: https://github.com/helmetjs/helmet
    app.use(helmet());
  }

  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
  app.use(methodOverride());

  app.use(express.static(path.join(__dirname, '../..', 'public')));

  app.set('trust proxy', 'loopback');

  console.log('--------------------------');
  console.log('===> 😊  Starting Server . . .');
  console.log(`===>  Environment: ${ENV}`);
  console.log(`===>  Listening on port: ${app.get('port')}`);
  console.log(`===>  Using DB TYPE: ${DB_TYPE}`);
  console.log('--------------------------');

  app.use(passport.initialize());
};
