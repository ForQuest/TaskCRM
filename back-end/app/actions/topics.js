/* eslint consistent-return: 0, no-else-return: 0*/
import { polyfill } from 'es6-promise';
import request from 'axios';
import md5 from 'spark-md5';
import * as lib from 'lib';
import * as types from 'types';
import { makeRequest, getMessage} from 'services';

polyfill();

/*
 * Utility function to make AJAX requests using isomorphic fetch.
 * You can also use jquery's $.ajax({}) if you do not want to use the
 * /fetch API.
 * Note: this function relies on an external variable `API_ENDPOINT`
 *        and isn't a pure function
 * @param Object Data you wish to pass to the server
 * @param String HTTP method, e.g. post, get, put, delete
 * @param String endpoint
 * @return Promise
 */

export function increment(id) {
  return { type: types.INCREMENT_COUNT, id };
}

export function decrement(id) {
  return { type: types.DECREMENT_COUNT, id };
}

export function destroy(id) {
  return { type: types.DESTROY_TOPIC, id };
}

export function start(id, startDate) {
  return {
    type: types.START_TOPIC,
    id,
    startDate
  };
}

export function stop(id, stopDate) {
  return {
    type: types.STOP_TOPIC,
    id,
    stopDate
  };
}


export function typing(text) {
  return {
    type: types.TYPING,
    newTopic: text
  };
}

/*
 * @param data
 * @return a simple JS object
 */
export function createTopicRequest(data) {
  return {
    type: types.CREATE_TOPIC_REQUEST,
    id: data.id,
    count: data.count,
    text: data.text,
    startDate: data.date
  };
}

export function createTopicSuccess() {
  return {
    type: types.CREATE_TOPIC_SUCCESS
  };
}

export function createTopicFailure(message) {
  return {
    type: types.CREATE_TOPIC_ERROR,
    message
  };
}

export function createTopicDuplicate() {
  return {
    type: types.CREATE_TOPIC_DUPLICATE
  };
}

// This action creator returns a function,
// which will get executed by Redux-Thunk middleware
// This function does not need to be pure, and thus allowed
// to have side effects, including executing asynchronous API calls.
export function createTopic(text) {
  return (dispatch, getState) => {
    // If the text box is empty
    if (text.trim().length <= 0) return;

    const id = md5.hash(text);
    // Redux thunk's middleware receives the store methods `dispatch`
    // and `getState` as parameters
    const { topic } = getState();
    const d = new Date();
    const data = {
      count: 1,
      id,
      text,
      startDate: d.toFormatString()
    };

    // Conditional dispatch
    // If the topic already exists, make sure we emit a dispatch event
    if (topic.topics.filter(topicItem => topicItem.id === id).length > 0) {
      // Currently there is no reducer that changes state for this
      // For production you would ideally have a message reducer that
      // notifies the user of a duplicate topic
      return dispatch(createTopicDuplicate());
    }

    // First dispatch an optimistic update
    
    return makeRequest('post', '/api/topic/'+id, data)
      .then(res => {
        if (res.status === 200) {
          // We can actually dispatch a CREATE_TOPIC_SUCCESS
          // on success, but I've opted to leave that out
          // since we already did an optimistic update
          // We could return res.json();
          dispatch(createTopicRequest(data));
          return dispatch(createTopicSuccess());
        }
      })
      .catch(err => {
        return dispatch(createTopicFailure(getMessage(err)));
      });
  };
}

// Fetch posts logic
export function fetchTopics() {
  return {
    type: types.GET_TOPICS,
    promise: makeRequest('get', '/api/topic/')
  };
}

export function incrementCount(id) {
  return dispatch => {
    return makeRequest('put', '/api/topic/'+id, {
        type: 'INCREMENT',
        isIncrement: true
      })
      .then(() => dispatch(increment(id)))
      .catch(err => dispatch(createTopicFailure(getMessage(err))));
  };
}

export function decrementCount(id) {
  return dispatch => {
    return makeRequest('put', '/api/topic/'+id, {
        type: 'INCREMENT',
        isIncrement: false
      })
      .then(() => dispatch(decrement(id)))
      .catch(err => dispatch(createTopicFailure(getMessage(err))));
  };
}

export function destroyTopic(id) {
  return dispatch => {
    return makeRequest('delete', '/api/topic/'+id)
      .then(() => dispatch(destroy(id)))
      .catch(err => dispatch(createTopicFailure(getMessage(err))));
  };
}

export function pauseTopic(id) {
  return (dispatch, getState) => {
    const { topic } = getState();

    if (topic.topics.filter(topicItem => (topicItem.id == id && ( topicItem.stopDate === undefined || topicItem.stopDate == null ))).length > 0) {
      let d = new Date();
      d = d.toFormatString();
      return makeRequest('put', '/api/topic/'+id,  {
        type: 'STOP_DATE',
        stopDate: d
      })
      .then(() => dispatch(stop(id, d)))
      .catch(err => dispatch(createTopicFailure(getMessage(err))));

    } else {
      const t = topic.topics.filter(topicItem => topicItem.id == id)[0];
      let startDate = Date.parse(t.startDate);
      let stopDate = Date.parse(t.stopDate);
      let d = new Date();
      d = new Date(d - (stopDate - startDate));
      d = d.toFormatString();
      return makeRequest('put', '/api/topic/'+id,  {
        type: 'START_DATE',
        startDate: d
      })
      .then(() => dispatch(start(id, d)))
      .catch(err => dispatch(createTopicFailure(getMessage(err))));
    }
    
  };
}
