import { takeLatest, throttle } from 'redux-saga';
import { delay } from 'redux-saga';
import { call, put, take, select, fork, cansel } from 'redux-saga/effects';
import * as actions from 'actions';
import { send } from './socket';

function* changeLightRGB() {
  const rbgData = yield select(state => state.light.rgb);
  yield fork(send, { type: 'light', options: { rgb: rbgData } });
}

export function* lightRoot() {
  yield takeLatest(actions.LIGHT_RGB, changeLightRGB);
}
