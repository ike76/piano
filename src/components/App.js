import React, { Component } from "react";
import Keyboard from "./Keyboard";
import Question from "./Question";

export default class App extends Component {
  render() {
    return (
      <div className="keyboard-container">
        <Question />
        <Keyboard />
      </div>
    );
  }
}
