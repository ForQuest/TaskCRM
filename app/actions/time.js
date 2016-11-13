/* eslint consistent-return: 0, no-else-return: 0*/
import { polyfill } from 'es6-promise';
import request from 'axios';
import md5 from 'spark-md5';
import * as types from 'types';
import { makeRequest, getMessage} from 'services';

polyfill();

export const tickStart = (delay = null) => dispatch => dispatch({ type: types.TICK_START, delay });
export const tickStop = () => dispatch => dispatch({ type: types.TICK_STOP });
