import { createAction } from 'redux-actions';

// Video
export const VIDEO_STATE = 'VIDEO_STATE';
export const videoState = createAction(VIDEO_STATE);

// Camera
export const CAMERA_START = 'CAMERA_START';
export const cameraStart = createAction(CAMERA_START);

// Camera
export const LIGHT_RGB = 'LIGHT_RGB';
export const lightRGB = createAction(LIGHT_RGB);

// Text
// export const CAMERA_START = 'CAMERA_START';
// export const cameraStart = createAction(CAMERA_START);

// Button
export const BUTTON_STATE = 'BUTTON_STATE';
export const buttonState = createAction(BUTTON_STATE);
