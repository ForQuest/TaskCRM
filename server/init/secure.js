import forceSSL from 'express-force-ssl';
import https from 'https';
import fs from 'fs';
import { join } from 'path';

export default (app) => {
  var privateKey  = fs.readFileSync(join(__dirname, './ssl/localhost.key'), 'utf8');
  var certificate = fs.readFileSync(join(__dirname, './ssl/localhost.crt'), 'utf8');
  var credentials = {key: privateKey, cert: certificate};
  app.use(forceSSL);

  return https.createServer(credentials, app);
};
