import { combineReducers } from 'redux';
import button from './button';
import video from './video';
import light from './light';
import text from './text';
import camera from './camera';

export default combineReducers({
  button,
  video,
  light,
  text,
  camera,
});
