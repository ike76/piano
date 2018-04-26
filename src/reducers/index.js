import { combineReducers } from "redux";
import keyboardReducer from "./keyboardReducer";
import testReducer from "./testReducer";

export default combineReducers({
  keyboard: keyboardReducer,
  test: testReducer
});
