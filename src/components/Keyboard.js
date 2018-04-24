import React, { Component } from "react";
import Key from "./Key";
import "../css/keyboard.css";

export default class Keyboard extends Component {
  render() {
    return (
      <svg width="700px" height="300px" viewBox="0 0 700 300" version="1.1">
        <g id="octave-1">
          <Key keypath="C" classes={"white"} octave={1} />
          <Key keypath="Csharp" classes={"black"} octave={1} />
          <Key keypath="D" classes={"white"} octave={1} />
          <Key keypath="Dsharp" classes={"black"} octave={1} />
          <Key keypath="E" classes={"white"} octave={1} />
          <Key keypath="F" classes={"white"} octave={1} />
          <Key keypath="Fsharp" classes={"black"} octave={1} />
          <Key keypath="G" classes={"white"} octave={1} />
          <Key keypath="Gsharp" classes={"black"} octave={1} />
          <Key keypath="A" classes={"white"} octave={1} />
          <Key keypath="Asharp" classes={"black"} octave={1} />
          <Key keypath="B" classes={"white"} octave={1} />
        </g>
        <g id="octave-2" transform="translate(350.5,0)">
          <Key keypath="C" classes={"white"} octave={2} />
          <Key keypath="Csharp" classes={"black"} octave={2} />
          <Key keypath="D" classes={"white"} octave={2} />
          <Key keypath="Dsharp" classes={"black"} octave={2} />
          <Key keypath="E" classes={"white"} octave={2} />
          <Key keypath="F" classes={"white"} octave={2} />
          <Key keypath="Fsharp" classes={"black"} octave={2} />
          <Key keypath="G" classes={"white"} octave={2} />
          <Key keypath="Gsharp" classes={"black"} octave={2} />
          <Key keypath="A" classes={"white"} octave={2} />
          <Key keypath="Asharp" classes={"black"} octave={2} />
          <Key keypath="B" classes={"white"} octave={2} />
        </g>
      </svg>
    );
  }
}
