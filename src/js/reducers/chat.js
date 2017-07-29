import * as actions from 'actions';

const initialState = {
  userText: [],
  systemText: [],
};

export default function test(state = initialState, action) {
  switch (action.type) {
    case actions.CHAT_USER_TEXT:
      return { ...state, userText: [ ...state.userText, action.payload ] };
    case actions.CHAT_SYSTEM_TEXT:
      return { ...state, systemText: [ ...state.systemText, action.payload ] };
    default:
      return state;
  }
};
