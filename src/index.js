import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import Keyboard from "./components/Keyboard";
import KeyboardContainer from "./components/KeyboardContainer";
import { Provider } from "react-redux";
import store from "./store";
ReactDOM.render(
  <Provider store={store}>
    <KeyboardContainer />
  </Provider>,
  document.getElementById("root")
);
