import { combineReducers } from "redux";

import { reducers as picturePageReducers } from "./PicturePage";

export { PicturePage } from "./PicturePage";
export { default as NotFound } from "./NotFoundPage";

export const reducers = combineReducers({
  ...picturePageReducers,
});
