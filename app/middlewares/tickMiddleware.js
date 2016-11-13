import * as types from 'types';

export default function tickMiddleware({ getState, dispatch }) {
  return next => action => {
    if (action.type === types.TICK_START) {
      action.interval = setInterval(() => dispatch({ type: types.TICK_EVENT }), action.delay || 100);
    } else if (action.type === types.TICK_STOP) {
      clearInterval(getState().timer.interval);
    }
    next(action);
  }
};