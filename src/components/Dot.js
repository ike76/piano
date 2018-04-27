import React from "react";
import "../css/dot.css";
import keyDotPositions from "../js/keyDotPositions";

const shapes = {
  circle: "◎",
  filledCircle: "✪",
  wrong: "✘"
};
// const shapes = {
//   fisheye: "\u25C9",
//   circle: "\u2299",
//   asterisk: "\u229B",
//   circleDot: "\u2299"
// };
const offset = {
  circle: 0,
  filledCircle: 4
};
export default function Dot(props) {
  const transX = keyDotPositions[props.keyName].x;
  const transY = keyDotPositions[props.keyName].y;

  return (
    <div
      className={`dot white ${props.className}`}
      style={{
        transform: `translate(${transX + offset[props.shape]}px, ${transY +
          offset[props.shape]}px)`
      }}
      onClick={() => props.userPlayKey(props.keyName)}
    >
      {shapes[props.shape]}
    </div>
  );
}
