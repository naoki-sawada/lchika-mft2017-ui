import * as actions from 'actions';

const initialState = {
  state: 'init',
};

export default function button(state = initialState, action) {
  switch (action.type) {
    case actions.CAMERA_STATE:
      return { ...state, state: action.payload };
    default:
      return { ...state };
  }
};
