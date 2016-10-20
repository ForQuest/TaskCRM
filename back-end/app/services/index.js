import axios from 'axios';
import request from 'axios';

export const makeRequest = (method, api = '/api', data) => axios[method](api, data);

export const getMessage = res => res.response && res.response.data && res.response.data.message;