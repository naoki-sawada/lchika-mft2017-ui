import { takeLatest, throttle } from 'redux-saga';
import { delay } from 'redux-saga';
import { call, put, take, select, fork, cansel } from 'redux-saga/effects';
import * as actions from 'actions';
import { send } from './socket';

function* sendTextWatch() {
  const text = yield select(state => state.text.send);
  yield fork(send, { type: 'text', options: { text: text } });
}

export function* textRoot() {
  yield takeLatest(actions.SEND_TEXT, sendTextWatch);
}
