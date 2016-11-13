const host = process.env.HOSTNAME || 'localhost';
const port = process.env.PORT || '3000';
const basicauth = new Buffer('web:websecret').toString('base64');
const isDev = () => __DEVCLIENT__ || __DEVSERVER__;

const trackingID = null;

export {
  host,
  port,
  trackingID,
  isDev
};

