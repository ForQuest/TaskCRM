import * as types from 'types';

/*
 * Message store for global messages, i.e. Network messages / Redirect messages
 * that need to be communicated on the page itself. Ideally
 * messages/notifications should appear within the component to give the user
 * more context. - My 2 cents.
 */
export default function message( state = { message: '', type: 'SUCCESS' }, action = {} ) {
  switch (action.type) {
    case types.PASSWORD_LOGIN_SUCCESS:
    case types.SIGNUP_SUCCESS_USER:
      return {...state, message: action.message, type: 'SUCCESS'};
    case types.DISMISS_MESSAGE:
      return {...state, message: '', type: 'SUCCESS'};
    case types.CREATE_TOPIC_ERROR:
      return {...state, message: action.message, type: 'ERROR'};
    default:
      return state;
  }
}
