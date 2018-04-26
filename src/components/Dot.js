import React from "react";
import "../css/dot.css";
import keyDotPositions from "../js/keyDotPositions";

const shapes = {
  fisheye: "\u25C9",
  circle: "\u2299",
  asterisk: "\u229B"
};
export default function Dot(params) {
  const transX = keyDotPositions[params.keyName].x;
  const transY = keyDotPositions[params.keyName].y;

  return (
    <div
      className={`dot white ${params.className}`}
      style={{ transform: `translate(${transX}px, ${transY}px)` }}
    >
      {shapes[params.shape]}
    </div>
  );
}
