import * as actions from 'actions';

const initialState = {
  state: 'light',
};

export default function test(state = initialState, action) {
  switch (action.type) {
    case actions.BUTTON_STATE:
      return { ...state, state: action.payload };
    default:
      return { ...state };
  }
};
