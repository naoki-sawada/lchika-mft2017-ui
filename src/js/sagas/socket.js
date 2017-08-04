import { takeLatest, eventChannel } from 'redux-saga';
import { call, take, select, fork, put, takeEvery } from 'redux-saga/effects';
import * as actions from 'actions';

export function* send(payload) {
  const socket = yield select(state => state.socket.socket);
  if (socket) {
    socket.send(payload);
  }
}

function* defaultMessage(payload) {
  console.log(payload);
}

function subscribe(socket) {
    return eventChannel(emit => {
    socket.on('message', payload => {
      emit({ func: defaultMessage, options: payload });
    });
    return () => {};
  });
}

function* registerHandler() {
  const socket = yield select(state => state.socket.socket);
  if (socket) {
    const channel = yield call(subscribe, socket);
    while(true) {
      const action = yield take(channel);
      const { func, options } = action;
      if (options) {
        yield call(func, options);
      } else {
        yield call(func);
      }
    }
  }
}

export function* socketRoot() {
  yield fork(registerHandler);
}
