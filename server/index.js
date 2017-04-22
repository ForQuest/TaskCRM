import express from 'express';
import forceSSL from 'express-force-ssl';
import webpack from 'webpack';
import https from 'https';
import fs from 'fs';
import { join } from 'path';
import { ENV } from './config/appConfig';
import { connect } from './db';
import passportConfig from './config/passport';
import expressConfig from './config/express';
import routesConfig from './config/routes';
const App = require('../public/assets/server');
const app = express();

var privateKey  = fs.readFileSync(join(__dirname, './ssl/localhost.key'), 'utf8');
var certificate = fs.readFileSync(join(__dirname, './ssl/localhost.crt'), 'utf8');
var credentials = {key: privateKey, cert: certificate};

const httpsServer = https.createServer(credentials, app);

/*
 * Database-specific setup
 * - connect to MongoDB using mongoose
 * - register mongoose Schema
 */
connect();
/*
 * REMOVE if you do not need passport configuration
 */
passportConfig();

if (ENV === 'development') {
  const webpackDevConfig = require('../webpack/webpack.config.dev-client');
  const compiler = webpack(webpackDevConfig);
  app.use(require('webpack-dev-middleware')(compiler, {
    noInfo: true,
    publicPath: webpackDevConfig.output.publicPath
  }));

  app.use(require('webpack-hot-middleware')(compiler));
}

/*
 * Bootstrap application settings
 */
expressConfig(app);
app.disable('x-powered-by');

ENV === 'production'?app.use(forceSSL):null;

/*
 * REMOVE if you do not need any routes
 *
 * Note: Some of these routes have passport and database model dependencies
 */
routesConfig(app);

/*
 * This is where the magic happens. We take the locals data we have already
 * fetched and seed our stores with data.
 * App is a function that requires store data and url
 * to initialize and return the React-rendered html string
 */
app.get('*', App.default);

ENV === 'production'?httpsServer.listen(app.get('sslport')):app.listen(app.get('port'));
