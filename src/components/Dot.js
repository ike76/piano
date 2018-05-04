import React, { Component } from "react";
import "../css/dot.css";
import keyDotPositions from "../js/keyDotPositions";
import { CSSTransition } from "react-transition-group";
const shapes = {
  circle: "🔘",
  filledCircle: "🔵",
  wrong: "☠️",
  smile: "🤩",
  red: "🔴"
};
// const shapes = {
//   fisheye: "\u25C9",
//   circle: "\u2299",
//   asterisk: "\u229B",
//   circleDot: "\u2299"
// };

const offset = {
  circle: 0,
  filledCircle: 4,
  smile: 0,
  wrong: 0
};
export default class Dot extends Component {
  // const transX = keyDotPositions[props.keyName].x;
  // const transY = keyDotPositions[props.keyName].y;
  constructor(props) {
    super(props);
    this.startPosition = props.keyName;
    this.endPosition = props.endPosition;
    this.moveAfterMount = props.moveAfterMount;
    this.state = {
      currentPosition: "startPosition"
    };
  }
  componentDidMount() {}
  render() {
    return (
      <div
        className={`dot white ${this.props.className}`}
        data-key={this[this.state.currentPosition]}
        onClick={() => this.props.userPlayKey(this.props.keyName)}
      >
        {shapes[this.props.shape]}
      </div>
    );
  }
}
