import * as actions from 'actions';

const initialState = {
  rgb: [0, 0, 0],
};

export default function light(state = initialState, action) {
  switch (action.type) {
    case actions.LIGHT_RGB:
      return { ...state, rgb: action.payload };
    default:
      return { ...state };
  }
};
