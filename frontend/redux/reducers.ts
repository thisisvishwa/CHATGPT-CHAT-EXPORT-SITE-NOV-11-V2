import { combineReducers } from 'redux';
import { USER_AUTHENTICATED, CONVERSATION_LOADED, USER_UPDATED, CONVERSATION_UPDATED } from './actions';

const initialState = {
  user: null,
  conversation: null,
};

function userReducer(state = initialState.user, action) {
  switch (action.type) {
    case USER_AUTHENTICATED:
    case USER_UPDATED:
      return action.payload;
    default:
      return state;
  }
}

function conversationReducer(state = initialState.conversation, action) {
  switch (action.type) {
    case CONVERSATION_LOADED:
    case CONVERSATION_UPDATED:
      return action.payload;
    default:
      return state;
  }
}

const rootReducer = combineReducers({
  user: userReducer,
  conversation: conversationReducer,
});

export default rootReducer;