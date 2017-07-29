import { createAction } from 'redux-actions';

export const TEST_INCREMENT = 'TEST_INCREMENT';
export const TEST_DECREMENT = 'TEST_DECREMENT';
export const TEST_CLEAR = 'TEST_CLEAR';

export const testIncrement = createAction(TEST_INCREMENT);
export const testDecrement = createAction(TEST_DECREMENT);
export const testClear = createAction(TEST_CLEAR);

// chat
export const CHAT_USER_TEXT = 'CHAT_USER_TEXT';
export const CHAT_SYSTEM_TEXT = 'CHAT_SYSTEM_TEXT';

export const chatUserText = createAction(CHAT_USER_TEXT);
export const chatSystemText = createAction(CHAT_SYSTEM_TEXT);

// Button
export const BUTTON_STATE = 'BUTTON_STATE';
export const buttonState = createAction(BUTTON_STATE);
