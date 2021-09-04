import { combineReducers } from "redux";
import apiReducers from "./api";
import { reducers as pageReducers } from "../../pages";

export default combineReducers({
  api: apiReducers,
  ...pageReducers,
});
