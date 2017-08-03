import { put, fork } from 'redux-saga/effects';
import { buttonRoot } from './button';
import { videoRoot } from './video';

export default function* rootSaga() {
  yield fork(buttonRoot);
  yield fork(videoRoot);
}
