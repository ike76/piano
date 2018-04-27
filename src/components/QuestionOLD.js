// import React, { Component } from "react";
// import { connect } from "react-redux";
// import "../css/question.css";
// import notesList from "../js/notesList";
// import {
//   showQuestion,
//   macClickedKey,
//   listen,
//   setCorrectAnswer,
//   resetKeyboard
// } from "../actions";

// export class Question extends Component {
//   constructor() {
//     super();
//     // this.handleGo = this.handleGo.bind(this);
//   }

//   handleGo() {
//     const currentLesson = octavesChapter[this.props.currentLesson];
//     const noteName =
//       currentLesson.tests[this.props.testNum].questionNotes[0].note;
//     this.props.dispatch(
//       showQuestion(currentLesson.tests[this.props.testNum].questionNotes)
//     );
//     this.props.dispatch(
//       setCorrectAnswer(currentLesson.tests[this.props.testNum].correctAnswer)
//     );
//     this.props.dispatch(macClickedKey(noteName));
//     this.props.dispatch(listen);
//     this.testFunction();
//   }

//   render() {
//     this.handleGo();
//     const currentLesson = octavesChapter[this.props.currentLesson];
//     return (
//       <div className="question-answer">
//         <h1 className="title">{octavesChapter[0].title}</h1>
//         <div className="information">
//           <div>{currentLesson.information}</div>
//         </div>
//         <div className="cta">
//           <p>{this.props.responseText || currentLesson.cta}</p>
//           <button onClick={this.handleGo}>GO</button>
//         </div>
//       </div>
//     );
//   }
// }

// const mapStateToProps = state => ({
//   // move some of these into local state,  only put on global what needs to be there
//   currentChapter: state.currentChapter,
//   currentLesson: state.currentLesson,
//   currentQuestion: state.currentQuestion
// });

// export default connect(mapStateToProps)(Question);

// // function randomNoteName() {
// //   const index = Math.floor(Math.random() * notesList.length + 1);
// //   return notesList[index];
// // }
