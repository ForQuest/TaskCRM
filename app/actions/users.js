import { polyfill } from 'es6-promise';
import request from 'axios';
import { push } from 'react-router-redux';
import * as types from 'types';

polyfill();

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
    request: {
      method: 'post',
      url: '/logout'
    }
  };
}

