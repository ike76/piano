import React from "react";
import { connect } from "react-redux";
function randomNoteName() {
  const notes = [
    "C1",
    "D1",
    "E1",
    "F1",
    "G1",
    "A1",
    "B1",
    "C2",
    "D2",
    "E2",
    "F2",
    "G2",
    "A2",
    "B2",
    "C#1",
    "D#1",
    "F#1",
    "G#1",
    "A#1",
    "C#2",
    "D#2",
    "F#2",
    "G#2",
    "A#2"
  ];
  const index = Math.floor(Math.random() * notes.length + 1);
  console.log("random note:", notes[index]);
  return notes[index];
}
export function Octaves(props) {
  const lessonText = [
    {
      information: `There are many keys on a piano (up to 88!)
          but really, there are only 12. after that they repeat.
          Notice how the black keys are a repeating pattern of 2 - 3 - 2 - 3 etc?`,
      cta: `I'll select a note and you choose the matching one`,
      questionNotes: [{ note: randomNoteName(), show: "stayOn", play: true }],
      correctResponse: ["F2"]
    }
  ];
  return lessonText[props.currentQuestion];
}
const mapStateToProps = state => ({
  currentQuestion: state.currentQuestion
});
export default connect(mapStateToProps)(Octaves);
