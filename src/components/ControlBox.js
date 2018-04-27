import React from "react";
import "../css/controlBox.css";

export default function ControlBox(props) {
  return (
    <div className="controlBox">
      <h4>
        {props.attr}: {props.currentNum}
      </h4>
      <button
        className="controlButton"
        onClick={() => props.cb(props.currentNum - 1)}
      >
        ⬇︎
      </button>
      <button
        className="controlButton"
        onClick={() => props.cb(props.currentNum + 1)}
      >
        ⬆︎
      </button>
    </div>
  );
}
