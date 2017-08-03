import { put, fork } from 'redux-saga/effects';
import { buttonRoot } from './button';
import { videoRoot } from './video';
import { lightRoot } from './light';
import { textRoot } from './text';
import { cameraRoot } from './camera';

export default function* rootSaga() {
  yield fork(buttonRoot);
  yield fork(videoRoot);
  yield fork(lightRoot);
  yield fork(textRoot);
  yield fork(cameraRoot);
}
