import React, { Component } from "react";
import Key from "./Key";
import Dot from "./Dot";
import "../css/keyboard.css";
import { connect } from "react-redux";
export class Keyboard extends Component {
  render() {
    return (
      <div className="keyboard-frame">
        <div className="keyboard">
          {this.props.questionDots.map(key => {
            return (
              <Dot
                key={key}
                keyName={key}
                className={"orange"}
                shape={"fisheye"}
              />
            );
          })}
          {this.props.answerDots.map(key => {
            return (
              <Dot
                key={key}
                keyName={key}
                className={"blue"}
                shape={"fisheye"}
              />
            );
          })}
          <svg width="700px" height="300px" viewBox="0 0 700 300" version="1.1">
            <g id="octave-1">
              <Key keypath="C" classes={"white"} octave={1} />
              <Key keypath="C#" classes={"black"} octave={1} />
              <Key keypath="D" classes={"white"} octave={1} />
              <Key keypath="D#" classes={"black"} octave={1} />
              <Key keypath="E" classes={"white"} octave={1} />
              <Key keypath="F" classes={"white"} octave={1} />
              <Key keypath="F#" classes={"black"} octave={1} />
              <Key keypath="G" classes={"white"} octave={1} />
              <Key keypath="G#" classes={"black"} octave={1} />
              <Key keypath="A" classes={"white"} octave={1} />
              <Key keypath="A#" classes={"black"} octave={1} />
              <Key keypath="B" classes={"white"} octave={1} />
            </g>
            <g id="octave-2" transform="translate(350.5,0)">
              <Key keypath="C" classes={"white"} octave={2} />
              <Key keypath="C#" classes={"black"} octave={2} />
              <Key keypath="D" classes={"white"} octave={2} />
              <Key keypath="D#" classes={"black"} octave={2} />
              <Key keypath="E" classes={"white"} octave={2} />
              <Key keypath="F" classes={"white"} octave={2} />
              <Key keypath="F#" classes={"black"} octave={2} />
              <Key keypath="G" classes={"white"} octave={2} />
              <Key keypath="G#" classes={"black"} octave={2} />
              <Key keypath="A" classes={"white"} octave={2} />
              <Key keypath="A#" classes={"black"} octave={2} />
              <Key keypath="B" classes={"white"} octave={2} />
            </g>
          </svg>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  questionDots: state.questionDots,
  answerDots: state.answerDots
});

export default connect(mapStateToProps)(Keyboard);
