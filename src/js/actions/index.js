import { createAction } from 'redux-actions';

// Video
export const VIDEO_STATE = 'VIDEO_STATE';
export const videoState = createAction(VIDEO_STATE);

// Camera
export const CAMERA_STATE = 'CAMERA_STATE';
export const cameraState = createAction(CAMERA_STATE);

// Light
export const LIGHT_RGB = 'LIGHT_RGB';
export const lightRGB = createAction(LIGHT_RGB);

// Text
export const SEND_TEXT = 'SEND_TEXT';
export const sendText = createAction(SEND_TEXT);

// Button
export const BUTTON_STATE = 'BUTTON_STATE';
export const buttonState = createAction(BUTTON_STATE);
