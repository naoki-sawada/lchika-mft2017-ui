import { combineReducers } from 'redux';
import test from './test';
import chat from './chat';
import button from './button';

export default combineReducers({
  test,
  chat,
  button,
});
