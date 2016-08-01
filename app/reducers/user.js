import * as types from 'types';
import { combineReducers } from 'redux';

const message = ( state = '', action ) => {
  switch (action.type) {
    case types.PASSWORD_LOGIN_REQUEST:
    case types.REFRESH_LOGIN_REQUEST:
    case types.USER_LOGOUT_REQUEST:
    case types.PASSWORD_LOGIN_SUCCESS:
    case types.SIGNUP_USER:
    case types.SIGNUP_SUCCESS_USER:
      return '';
    case types.PASSWORD_LOGIN_FAILURE:
    case types.REFRESH_LOGIN_FAILURE:
    case types.SIGNUP_ERROR_USER:
      return action.message?action.message:'';
    default:
      return state;
  }
};

const isWaiting = ( state = false, action ) => {
  switch (action.type) {
    case types.PASSWORD_LOGIN_REQUEST:
    case types.REFRESH_LOGIN_REQUEST:
    case types.USER_LOGOUT_REQUEST:
    case types.SIGNUP_USER:
      return true;
    case types.PASSWORD_LOGIN_SUCCESS:
    case types.PASSWORD_LOGIN_FAILURE:
    case types.USER_LOGOUT_SUCCESS:
    case types.USER_LOGOUT_FAILURE:
    case types.REFRESH_LOGIN_SUCCESS:
    case types.REFRESH_LOGIN_FAILURE:
    case types.SIGNUP_SUCCESS_USER:
    case types.SIGNUP_ERROR_USER:
      return false;
    default:
      return state;
  }
};

const authenticated = ( state = false, action ) => {
  switch (action.type) {
    case types.PASSWORD_LOGIN_SUCCESS:
    case types.SIGNUP_SUCCESS_USER:
    case types.USER_LOGOUT_FAILURE:
    case types.REFRESH_LOGIN_SUCCESS:
      return true;
    case types.PASSWORD_LOGIN_FAILURE:
    case types.REFRESH_LOGIN_FAILURE:
    case types.SIGNUP_ERROR_USER:
    case types.USER_LOGOUT_SUCCESS:
      return false;
    default:
      return state;
  }
};


const access_token = ( state = '', action ) => {
  switch (action.type) {
    case types.PASSWORD_LOGIN_SUCCESS:
    case types.SIGNUP_SUCCESS_USER:
    case types.REFRESH_LOGIN_SUCCESS:
      return action.access_token;
    case types.PASSWORD_LOGIN_FAILURE:
    case types.REFRESH_LOGIN_FAILURE:
    case types.SIGNUP_ERROR_USER:
    case types.USER_LOGOUT_SUCCESS:
    case types.ACCESS_TOKEN_INVALID:
      return '';
    default:
      return state;
  }
};

const refresh_token = ( state = '', action ) => {
  switch (action.type) {
    case types.SIGNUP_SUCCESS_USER:
      return action.refresh;
    case types.PASSWORD_LOGIN_SUCCESS:
    case types.REFRESH_LOGIN_SUCCESS:
      return action.refresh_token;
    case types.PASSWORD_LOGIN_FAILURE:
    case types.REFRESH_LOGIN_FAILURE:
    case types.USER_LOGOUT_SUCCESS:
    case types.SIGNUP_ERROR_USER:
      return '';
    default:
      return state;
  }
};

const userReducer = combineReducers({
  isWaiting,
  authenticated,
  message,
  access_token,
  refresh_token
});

export default userReducer;
