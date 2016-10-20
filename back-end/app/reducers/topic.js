import { combineReducers } from 'redux';
import * as types from 'types';

const topic = ( state = {}, action ) => {
  switch (action.type) {
    case types.CREATE_TOPIC_REQUEST:
      return {
        id: action.id,
        count: action.count,
        text: action.text,
        startDate: action.startDate
      };
    case types.INCREMENT_COUNT:
      if (state.id === action.id) {
        return { ...state, count: state.count + 1 };
      }
      return state;
    case types.DECREMENT_COUNT:
      if (state.id === action.id) {
        return { ...state, count: state.count - 1 };
      }
    case types.START_TOPIC:
      if (state.id === action.id) {
        return { ...state, startDate: action.startDate, stopDate: null };
      }
      return state;
    case types.STOP_TOPIC:
      if (state.id === action.id) {
        return { ...state, stopDate: action.stopDate };
      }
      return state;
    default:
      return state;
  }
};

const topics = ( state = [], action ) => {
  switch (action.type) {
    case types.REQUEST_SUCCESS:
      if (action.data) return action.data;
      return state;
    case types.CREATE_TOPIC_REQUEST:
      return [...state, topic(undefined, action)];
    case types.CREATE_TOPIC_FAILURE:
      return '';
    case types.DESTROY_TOPIC:
      return state.filter(t => t.id !== action.id);
    case types.INCREMENT_COUNT:
    case types.DECREMENT_COUNT:
    case types.START_TOPIC:
    case types.STOP_TOPIC:
      return state.map(t => topic(t, action));
    default:
      return state;
  }
};

const newTopic = ( state = '', action ) => {
  switch (action.type) {
    case types.TYPING:
      return action.newTopic;
    case types.CREATE_TOPIC_REQUEST:
      return '';
    default:
      return state;
  }
};

const topicReducer = combineReducers({
  topics,
  newTopic
});

export default topicReducer;
