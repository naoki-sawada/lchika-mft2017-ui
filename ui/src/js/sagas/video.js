import { takeLatest, throttle } from 'redux-saga';
import { delay } from 'redux-saga';
import { call, put, take, select, fork, cansel } from 'redux-saga/effects';
import * as actions from 'actions';

function* changeVideoState() {
  console.log('!!!');
  // yield delay(1000);
  // yield put(actions.videoState('off'));
}

export function* videoRoot() {
  yield takeLatest(actions.VIDEO_STATE, changeVideoState);
}
