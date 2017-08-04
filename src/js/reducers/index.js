import { combineReducers } from 'redux';
import button from './button';
import video from './video';
import light from './light';
import text from './text';
import camera from './camera';
import socket from './socket';

export default combineReducers({
  button,
  video,
  light,
  text,
  camera,
  socket,
});
