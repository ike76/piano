import React from "react";
import { CSSTransition } from "react-transition-group";
import "../css/scoremarker.css";
const ScoreMarker = props => {
  const icons = {
    starEyes: "🤩",
    circle: "⚪️",
    skull: "☠️",
    frownFace: "😫"
  };
  return <div>{icons[props.icon]}</div>;
};

export default ScoreMarker;
