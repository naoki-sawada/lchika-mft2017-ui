import * as actions from 'actions';

const initialState = {
  music: '',
};

export default function light(state = initialState, action) {
  switch (action.type) {
    case actions.MUSIC_CHANGE:
      return { ...state, music: action.payload };
    default:
      return { ...state };
  }
};
