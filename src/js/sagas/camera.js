import { takeLatest, throttle } from 'redux-saga';
import { delay } from 'redux-saga';
import { call, put, take, select, fork, cansel } from 'redux-saga/effects';
import * as actions from 'actions';
import { send } from './socket';

function* cameraStateWatch() {
  yield fork(send, { type: 'camera', options: {} });
}

export function* cameraRoot() {
  yield takeLatest(actions.CAMERA_STATE, cameraStateWatch);
}
