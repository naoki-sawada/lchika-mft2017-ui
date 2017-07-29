import { put, fork } from 'redux-saga/effects';
import { buttonRoot } from './button';

export default function* rootSaga() {
  yield fork(buttonRoot);
}
