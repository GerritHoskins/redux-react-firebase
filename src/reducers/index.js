/* import { combineReducers } from "redux";
import todos from "./todos";

import { reducer as firebase } from "react-redux-firebase";

export default combineReducers({
  firebase,
  todos,
  visibilityFilter
}); */

import visibilityFilter from "./visibilityFilter";
import { combineReducers } from "redux";
import { reducer as firebase } from "react-redux-firebase";

const rootReducer = combineReducers({
  firebase,
  visibilityFilter
});

export default rootReducer;
