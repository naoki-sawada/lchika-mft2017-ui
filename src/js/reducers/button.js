import * as actions from 'actions';

const initialState = {
  state: 'light',
};

export default function button(state = initialState, action) {
  switch (action.type) {
    case actions.BUTTON_STATE:
      return { ...state, state: action.payload };
    default:
      return { ...state };
  }
};
