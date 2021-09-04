import { PICTURE_PAGE_NAME } from "./constants";

export const initialState = {
  approved: [],
  rejected: [],
};

function picturePageReducer(state = initialState, action) {
  switch (action.type) {
    case `${PICTURE_PAGE_NAME}__PUSH_APPROVED`:
      return {
        ...state,
        approved: [...state.approved, action.payload],
      };
    case `${PICTURE_PAGE_NAME}__PUSH_REJECTED`:
      return {
        ...state,
        rejected: [...state.rejected, action.payload],
      };
    default:
      return state;
  }
}

export default picturePageReducer;
