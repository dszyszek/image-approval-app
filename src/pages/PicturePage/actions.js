import {
  APPROVE_PICTURE,
  REJECT_PICTURE,
  CHANGE_MAIN_PICTURE,
  SET_ACTIONS_BUTTONS_VISIBILITY,
  SET_MAIN_PICTURE_CLICKABLE,
} from "./constants";

export const approvePicture = (payload) => ({
  type: APPROVE_PICTURE,
  payload,
});

export const rejectPicture = (payload) => ({
  type: REJECT_PICTURE,
  payload,
});

export const changeMainPicture = (payload) => ({
  type: CHANGE_MAIN_PICTURE,
  payload,
});

export const setActionButtonsVisibility = (payload) => ({
  type: SET_ACTIONS_BUTTONS_VISIBILITY,
  payload,
});

export const setMainPictureClickable = (payload) => ({
  type: SET_MAIN_PICTURE_CLICKABLE,
  payload,
});
