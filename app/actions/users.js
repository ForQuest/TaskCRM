import { polyfill } from 'es6-promise';
import request from 'axios';
import { push } from 'react-router-redux';
import * as types from 'types';

polyfill();

// Sign Up Action Creators
export function signUpError(message) {
  return {
    type: types.SIGNUP_ERROR_USER,
    message
  };
}

export function beginSignUp() {
  return { type: types.SIGNUP_USER };
}

export function signUpSuccess(message) {
  return {
    type: types.SIGNUP_SUCCESS_USER,
    message
  };
}

export function passwordLogin(data) {
  return {
    type: types.PASSWORD_LOGIN,
    request: {
      method: 'post',
      url: '/login',
      data: {
        grant_type: 'password',
        ...data
      }
    }
  };
}

export function refreshLogin(refresh_token, lastAction) {
  return {
    type: types.REFRESH_LOGIN,
    request: {
      method: 'post',
      url: '/login',
      data: {
        grant_type: 'refresh_token',
        refresh_token: refresh_token
      }
    },
    lastAction
  };
}

export function logOut() {
  return {
    type: types.USER_LOGOUT,
    promise: makeRequest('post', '/logout')
  };
}

