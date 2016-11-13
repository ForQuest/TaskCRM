/* eslint consistent-return: 0, no-else-return: 0*/
import { polyfill } from 'es6-promise';
import request from 'axios';
import md5 from 'spark-md5';
import * as lib from 'lib';
import * as types from 'types';
import { makeRequest, getMessage} from 'services';

polyfill();


export function fetchTopics() {
  return {
    type: types.GET_TOPICS,
    request: {
      method: 'get',
      url: '/api/topic/',
    }
  };
}

export function createTopic(text) {
  let data = {
      count: 1,
      id: md5.hash(text),
      text,
      startDate: new Date().toFormatString()
    };
  return {
    data,
    type: types.CREATE_TOPIC,
    request: {
      method: 'post',
      url: '/api/topic/'+md5.hash(text),
      data
    }
  }
}

export function updateTopic(method, dispatch_data = {}, success_type, request_data) {
  return {
    type: types.UPDATE_TOPIC,
    request: {
      method,
      url: '/api/topic/'+dispatch_data.id,
      data: request_data
    },
    success: success_type,
    ...dispatch_data
  }
}

export const incrementCount = (id) => updateTopic('put', { id }, types.INCREMENT_COUNT, { type: 'INCREMENT', isIncrement: true });
export const decrementCount = (id) => updateTopic('put', { id }, types.DECREMENT_COUNT, { type: 'INCREMENT', isIncrement: false });
export const destroyTopic   = (id) => updateTopic('delete', { id }, types.DESTROY_TOPIC );
export const pauseTopic     = (id) => {
  return (dispatch, getState) => {
    const { topic } = getState();
    if (topic.topics.filter(topicItem => (topicItem.id == id && ( topicItem.stopDate === undefined || topicItem.stopDate == null ))).length > 0) {
      let date = new Date().toFormatString();
      dispatch(updateTopic('put', { id, stopDate: date }, types.STOP_TOPIC, {type: 'STOP_DATE', stopDate: date }));
    } else {
      const t = topic.topics.filter(topicItem => topicItem.id == id)[0];
      let date = new Date(Date.now() - (Date.parse(t.stopDate) - Date.parse(t.startDate))).toFormatString();
      dispatch(updateTopic('put', { id, startDate: date }, types.START_TOPIC, {type: 'START_DATE', startDate: date }));
    }
  };
}

export function typing(text) {
  return {
    type: types.TYPING,
    newTopic: text
  };
}





