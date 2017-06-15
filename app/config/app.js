import { isDebug } from '../../config/app';
export const host = process.env.HOSTNAME || 'localhost';
export const port = process.env.PORT || '80';
export const basicauth = new Buffer('web:websecret').toString('base64');
export const baseURL = isDebug?'http://'+host+':'+port:'https://'+host;

export const trackingID = null;

