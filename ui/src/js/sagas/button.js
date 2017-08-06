import { takeLatest, throttle } from 'redux-saga';
import { delay } from 'redux-saga';
import { call, put, take, select, fork, cansel } from 'redux-saga/effects';
import * as actions from 'actions';

function* changeButtonState() {
  // console.log('!!!');
}

export function* buttonRoot() {
  yield takeLatest(actions.BUTTON_STATE, changeButtonState);
}
