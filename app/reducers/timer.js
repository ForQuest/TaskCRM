import { combineReducers } from 'redux';
import * as types from 'types';


const tick = ( state = false, action ) => {
  switch (action.type) {
    case types.TICK_EVENT:
      return !state;   
    default:
      return state;
  }
};

const interval = ( state = null, action ) => {
  switch (action.type) {
    case types.TICK_START:
      return action.interval;
    case types.TICK_STOP:
      return null;   
    default:
      return state;
  }
};

const timerReducer = combineReducers({
  tick,
  interval
});

export default timerReducer;
