/* eslint node/no-unsupported-features/es-syntax: 0 */

import { combineReducers } from "redux";
import apiReducers from "./api";
import { reducers as pageReducers } from "../../pages";

export default combineReducers({
  api: apiReducers,
  ...pageReducers,
});
