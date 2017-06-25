import { refreshLogin } from '../actions/users';
import * as types from 'types';
/*
* Redux middleware to handle promises
* As seen in: https://github.com/caljrimmer/isomorphic-redux-app
*/

export default function promiseMiddleware({ getState, dispatch }) {
  return next => action => {
    const { promise, type, success, failure, ...rest } = action;

    if (!promise) return next(action);
    
    const SUCCESS = success || type + '_SUCCESS';
    const REQUEST = type + '_REQUEST';
    const FAILURE = failure || type + '_FAILURE';
    next({ ...rest, type: REQUEST });

    return promise
      .then((res) => {
        const { data } = res;
        switch(typeof data){
          case 'string':
            next({ ...rest, type: SUCCESS });
            break;
          default:
            if(Array.prototype === data.__proto__){ // Temporary solution
              next({ ...rest, data, type: SUCCESS });
            } else {
              next({ ...rest, ...data, type: SUCCESS });
            }
            break;
        }
        if(type == types.REFRESH_LOGIN){
          const { lastEvent } = action;
          console.log(lastEvent);
          promise.bind();
        }
        return true;
      })
      .catch(({ data, response }) => {
        const { user: { refresh_token }} = getState();

        if (response.status === 401) {
          const { statusText } = response;
          !refresh_token
            ?next({ ...rest, statusText, type: FAILURE })
            :null;
          dispatch({ type: types.ACCESS_TOKEN_INVALID });
          dispatch(refreshLogin(refresh_token));
        } else {
          const { statusText } = response;
          next({ ...rest, statusText, type: FAILURE });
        }
        return false;
      });
   };
}
