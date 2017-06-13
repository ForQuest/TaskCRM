import axios from 'axios';
import { refreshLogin } from '../actions/users';
import * as types from 'types';
const toType = obj => ({}).toString.call(obj).match(/\s([a-zA-Z]+)/)[1].toLowerCase();

export default function requestMiddleware({ getState, dispatch }) {
  return next => action => {
    const { request, type, success, failure, ...rest } = action;
    const { user: { access_token }} = getState();

    if (!request) return next(action);
    
    const SUCCESS = success || type + '_SUCCESS';
    const REQUEST = type + '_REQUEST';
    const FAILURE = failure || type + '_FAILURE';
    next({ ...rest, type: REQUEST });

    let auth = !access_token
      ?{ auth: { username: 'web', password: 'websecret' } }
      :{ headers: { 'Authorization': 'Bearer '+access_token } };

    axios.request({...request, ...auth})
      .then((res) => {
        const { data } = res;
        
        switch( toType(data) ){
          case 'string':
            next({ ...rest, type: SUCCESS });
            break;
          case 'array':
            next({ ...rest, data, type: SUCCESS });
            break;
          default:
            next({ ...rest, ...data, type: SUCCESS });
            break;
        }

        if(type === types.REFRESH_LOGIN) dispatch(action.lastAction);
        return true;
      })
      .catch(({ data, response }) => {
        const { user: { refresh_token }} = getState();
        const { statusText } = response;
        console.log(response);
        dispatch({ ...rest, message: statusText, type: FAILURE });

        switch(response.status) {
          case 401:
            dispatch({ type: types.ACCESS_TOKEN_INVALID });
            dispatch(refreshLogin(refresh_token, action));
            break;
        }

        return false;
      });
   };
}
