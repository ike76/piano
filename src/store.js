import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import allReducer from "./reducers/index";
export default createStore(allReducer, composeWithDevTools());
// window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
