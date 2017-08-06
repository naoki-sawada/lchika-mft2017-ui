import * as actions from 'actions';

const initialState = {
  send: '',
};

export default function button(state = initialState, action) {
  switch (action.type) {
    case actions.SEND_TEXT:
      return { ...state, send: action.payload };
    default:
      return { ...state };
  }
};
