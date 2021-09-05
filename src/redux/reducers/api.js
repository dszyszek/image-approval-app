/* eslint no-case-declarations: 0 */

import { UNSPLASH_NAME } from "../../constants";
import { UNSPLASH_ADD_ONE_PICTURE } from "../actions";
import { extractRelevantFromUnsplashRespone } from "../../utils";

/* single picture object's format:
 * {
 *  small: string;
 *  thumb: string;
 *  id: string;
 *  alt: string;
 * }
 */

export const initialState = {
  [UNSPLASH_NAME]: {
    pictures: [],
  },
};
// alt_description
export default function (state = initialState, action) {
  switch (action.type) {
    case UNSPLASH_ADD_ONE_PICTURE:
      const { payload } = action;

      const data = extractRelevantFromUnsplashRespone(payload);
      return {
        ...state,
        [UNSPLASH_NAME]: {
          ...state[UNSPLASH_NAME],
          pictures: [...state[UNSPLASH_NAME].pictures, data],
        },
      };
    default:
      return state;
  }
}
