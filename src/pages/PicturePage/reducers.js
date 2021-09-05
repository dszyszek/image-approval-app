import { APPROVE_PICTURE, REJECT_PICTURE } from "./constants";

export const initialState = {
  approved: [],
  rejected: [],
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
    default:
      return state;
  }
}

export default picturePageReducer;
