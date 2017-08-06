import { takeLatest, throttle } from 'redux-saga';
import { delay } from 'redux-saga';
import { call, put, take, select, fork, cansel } from 'redux-saga/effects';
import * as actions from 'actions';
import { send } from './socket';

function* changeMusic() {
  const music = yield select(state => state.music.music);
  yield fork(send, { type: 'audio', options: { bgm: music } });
}

export function* musicRoot() {
  yield takeLatest(actions.MUSIC_CHANGE, changeMusic);
}
