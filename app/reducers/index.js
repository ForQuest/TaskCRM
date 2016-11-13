import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';
import user from 'reducers/user';
import topic from 'reducers/topic';
import message from 'reducers/message';
import timer from 'reducers/timer';
import * as types from 'types';

const rootReducer = combineReducers({
  topic,
  user,
  message,
  routing,
  timer
});

export default rootReducer;
