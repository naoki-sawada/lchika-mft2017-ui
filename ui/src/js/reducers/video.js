import * as actions from 'actions';

const initialState = {
  state: 'off',
};

export default function button(state = initialState, action) {
  switch (action.type) {
    case actions.VIDEO_STATE:
      return { ...state, state: action.payload };
    default:
      return { ...state };
  }
};
