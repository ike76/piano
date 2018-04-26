import React from "react";
import { connect } from "react-redux";
import "../css/question.css";
import notesList from "../js/notesList";
import {
  showQuestion,
  macClickedKey,
  listen,
  setCorrectAnswer
} from "../actions";

export function Question(props) {
  const octavesChapter = [
    {
      title: "OCTAVES",
      information: `There are many keys on a piano (up to 88!)
          but really, there are only 12. after that they repeat.  \n
          Notice how the black keys are a repeating pattern of 2 - 3 - 2 - 3 etc?`,
      cta: `I'll select a note and you choose the matching one`,
      tests: [
        {
          questionNotes: [{ note: "F#1" }],
          correctAnswer: ["F#2"]
        },
        {
          questionNotes: [{ note: "A2" }],
          correctAnswer: ["A1"]
        },
        {
          questionNotes: [{ note: "E1" }],
          correctAnswer: ["E2"]
        }
      ]
    }
  ];
  const currentLesson = octavesChapter[props.currentLesson];

  const handleGo = () => {
    const noteName = currentLesson.tests[props.testNum].questionNotes[0].note;
    console.log("notename:", noteName);
    props.dispatch(
      showQuestion(currentLesson.tests[props.testNum].questionNotes)
    );
    props.dispatch(
      setCorrectAnswer(currentLesson.tests[props.testNum].correctAnswer)
    );
    props.dispatch(macClickedKey(noteName));
    props.dispatch(listen);
  };

  return (
    <div className="question-answer">
      <h1 className="title">{octavesChapter[0].title}</h1>
      <div className="information">
        <div>{currentLesson.information}</div>
      </div>
      <div className="cta">
        <p>{currentLesson.cta}</p>
        <button onClick={handleGo}>GO</button>
      </div>
    </div>
  );
}

const mapStateToProps = state => ({
  currentLesson: state.test.currentLesson,
  correctAnswer: state.test.correctAnswer,
  studentAnswer: state.test.studentAnswer,
  testNum: state.test.testNum
});

export default connect(mapStateToProps)(Question);

// function randomNoteName() {
//   const index = Math.floor(Math.random() * notesList.length + 1);
//   return notesList[index];
// }
