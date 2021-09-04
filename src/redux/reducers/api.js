import { UNSPLASH_NAME } from "../../constants";

/* single picture object's format:
 * {
 *  full: string;
 *  thumb: string;
 *  id: string;
 * }
 */

export const initialState = {
  [UNSPLASH_NAME]: {
    pictures: [],
  },
};

export default function (state = initialState, action) {
  switch (action.type) {
    case `${UNSPLASH_NAME}__GET_PICTURE`:
      return {
        ...state,
      };
    default:
      return state;
  }
}
