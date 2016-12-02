import axios from 'axios';
import { loadState } from '../store/localStorage';

export const makeRequest = (method, api = '/api', data) => {
  let { user: { access_token }} = loadState();
  if(!access_token){
    let auth = new Buffer('web:websecret');
    access_token = 'Basic ' + auth.toString('base64');
  } else {
    access_token = 'Bearer '+access_token;
  }

  let config = {
    url: api,
    method: method,
    headers: {'Authorization': access_token},
    data: data
  };
  
  return axios.request(config);
}

export const getMessage = res => res.response && res.response.data && res.response.data.message;