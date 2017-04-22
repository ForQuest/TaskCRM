export const isDev = () => __DEVCLIENT__ || __DEVSERVER__;
export const host = process.env.HOSTNAME || 'localhost';
export const port = process.env.PORT || '80';
export const basicauth = new Buffer('web:websecret').toString('base64');
export const baseURL = isDev?'http://'+host+':'+port:'https://'+host;

export const trackingID = null;

