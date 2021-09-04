import { combineReducers } from "redux";
import apiReducers from "./api";
import { reducers as pageReducers } from "../../pages";

console.log(
  {
    api: apiReducers,
    ...pageReducers,
  },
  "reducers",
);

export default combineReducers({
  api: apiReducers,
  ...pageReducers,
});
