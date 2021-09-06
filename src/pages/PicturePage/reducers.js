import {
  APPROVE_PICTURE,
  REJECT_PICTURE,
  CHANGE_MAIN_PICTURE,
  SET_ACTIONS_BUTTONS_VISIBILITY,
  SET_MAIN_PICTURE_CLICKABLE,
} from "./constants";

/* single picture state's format:
 * {
 *  small: string;
 *  thumb: string;
 *  id: string;
 *  alt: string;
 * }
 */

export const initialState = {
  approved: [],
  rejected: [],
  mainPicture: {},
  actionButtonsVisible: false,
  mainPictureClickable: true,
};

function picturePageReducer(state = initialState, action) {
  switch (action.type) {
    case APPROVE_PICTURE:
      return {
        ...state,
        approved: [...state.approved, action.payload],
      };
    case REJECT_PICTURE:
      return {
        ...state,
        rejected: [...state.rejected, action.payload],
      };
    case CHANGE_MAIN_PICTURE:
      return {
        ...state,
        mainPicture: action.payload,
      };
    case SET_ACTIONS_BUTTONS_VISIBILITY:
      return {
        ...state,
        actionButtonsVisible: action.payload,
      };
    case SET_MAIN_PICTURE_CLICKABLE:
      return {
        ...state,
        mainPictureClickable: action.payload,
      };
    default:
      return state;
  }
}

export default picturePageReducer;
