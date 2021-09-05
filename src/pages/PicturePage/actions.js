import { APPROVE_PICTURE, REJECT_PICTURE } from "./constants";

export const approvePicture = (payload) => ({
  type: APPROVE_PICTURE,
  payload,
});

export const rejectPicture = (payload) => ({
  type: REJECT_PICTURE,
  payload,
});
