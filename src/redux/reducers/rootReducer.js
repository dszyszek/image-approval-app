/* eslint node/no-unsupported-features/es-syntax: 0 */

import { combineReducers } from "redux";
import { reducers as pageReducers } from "../../pages";

export default combineReducers({
  ...pageReducers,
});
