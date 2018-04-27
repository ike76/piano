import React from "react";

export default function CycleButton(props) {
  return (
    <button
      style={props.name === props.currentCycle ? { color: "red" } : {}}
      onClick={() => props.cb(props.name)}
    >
      {props.name}
    </button>
  );
}
