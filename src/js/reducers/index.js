import { combineReducers } from 'redux';
import button from './button';
import video from './video';
import light from './light';

export default combineReducers({
  button,
  video,
  light,
});
