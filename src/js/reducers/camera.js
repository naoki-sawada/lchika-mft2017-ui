import * as actions from 'actions';

const initialState = {
  state: 'init',
  image: [],
};

export default function button(state = initialState, action) {
  switch (action.type) {
    case actions.CAMERA_STATE:
      return { ...state, state: action.payload };
    case actions.CAMERA_IMAGE:
      return { ...state, image: action.payload };
    default:
      return { ...state };
  }
};
