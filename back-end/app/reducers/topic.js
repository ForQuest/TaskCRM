import { combineReducers } from 'redux';
import * as types from 'types';

const topic = ( state = {}, action ) => {
  switch (action.type) {
    case types.CREATE_TOPIC_SUCCESS:
      return {
        id: action.data.id,
        count: action.data.count,
        text: action.data.text,
        startDate: action.data.startDate
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
    case types.GET_TOPICS_SUCCESS:
      if (action.data) return action.data;
      return state;
    case types.CREATE_TOPIC_SUCCESS:
      if (state.filter(topicItem => topicItem.id === action.data.id).length == 0) {
        return [...state, topic(undefined, action)];
      } else return state;
    case types.CREATE_TOPIC_FAILURE:
      return [];
    case types.DESTROY_TOPIC:
      return state.filter(t => t.id !== action.id);
    case types.INCREMENT_COUNT:
    case types.DECREMENT_COUNT:
    case types.START_TOPIC:
    case types.STOP_TOPIC:
      return state.map(t => topic(t, action));
    case types.PASSWORD_LOGIN_FAILURE:
    case types.SIGNUP_ERROR_USER:
    case types.USER_LOGOUT_SUCCESS:
    case types.GET_TOPICS_FAILURE:
      return [];
    default:
      return state;
  }
};

const newTopic = ( state = '', action ) => {
  switch (action.type) {
    case types.TYPING:
      return action.newTopic;
    case types.CREATE_TOPIC_SUCCESS:
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
