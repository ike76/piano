import { createStore } from "redux";
import allReducer from "./reducers/index";
export default createStore(
  allReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
