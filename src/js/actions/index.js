import { createAction } from 'redux-actions';

// Video
export const VIDEO_STATE = 'VIDEO_STATE';
export const videoState = createAction(VIDEO_STATE);

// Camera
export const CAMERA_STATE = 'CAMERA_STATE';
export const cameraState = createAction(CAMERA_STATE);
export const CAMERA_IMAGE = 'CAMERA_IMAGE';
export const cameraImage = createAction(CAMERA_IMAGE);

// Light
export const LIGHT_RGB = 'LIGHT_RGB';
export const lightRGB = createAction(LIGHT_RGB);

// Music
export const MUSIC_CHANGE = 'MUSIC_CHANGE';
export const musicChange = createAction(MUSIC_CHANGE);

// Text
export const SEND_TEXT = 'SEND_TEXT';
export const sendText = createAction(SEND_TEXT);

// Button
export const BUTTON_STATE = 'BUTTON_STATE';
export const buttonState = createAction(BUTTON_STATE);

// Socket
export const SOCKET_SEND = 'SOCKET_SEND';
export const socketSend = createAction(SOCKET_SEND);
