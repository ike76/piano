import React, { Component } from "react";
import { connect } from "react-redux";
import Keyboard from "./Keyboard";
import ControlBox from "./ControlBox";
import CycleButton from "./CycleButton";
import { Link } from "react-router-dom";
import { playSound } from "../js/audiosynth";
import * as actions from "../actions";
import * as chapters from "../chapters";

import "../css/controlBox.css";
export class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cycle: "learn",
      correctAnswer: [],
      studentAnswer: [],
      wrongNotes: [],
      listening: false,
      questionDots: ["A1"],
      answerDots: ["C1", "A1"],
      chapterName: props.match.params.chapterName
    };
    this.setCurrentChapter = this.setCurrentChapter.bind(this);
    this.setCurrentLesson = this.setCurrentLesson.bind(this);
    this.setCurrentQuestion = this.setCurrentQuestion.bind(this);
    this.setCycle = this.setCycle.bind(this);
    this.cycles = ["learn", "setup", "loop", "summary"];
  }

  // this.props.match.params.chapterName
  userPlayKey(noteName) {
    playSound(noteName);
    console.log("app says user played", noteName);
  }
  setCurrentChapter(num) {
    this.props.dispatch(actions.setChapter(num));
  }
  setCurrentLesson(num) {
    this.props.dispatch(actions.setLesson(num));
  }
  setCurrentQuestion(num) {
    this.props.dispatch(actions.setQuestion(num));
  }
  setCycle(name) {
    console.log(`showing ${name}`);
    this.setState({ cycle: name });
  }
  render() {
    const chapter = chapters[this.props.currentChapter];
    return (
      <div className="">
        <main>
          <div className="controlPanel">
            <ControlBox
              attr={"currentChapter"}
              currentNum={this.props.currentChapter}
              cb={this.setCurrentChapter}
            />
            <ControlBox
              attr={"currentLesson"}
              currentNum={this.props.currentLesson}
              cb={this.setCurrentLesson}
            />
            <ControlBox
              attr={"currentQuestion"}
              currentNum={this.props.currentQuestion}
              cb={this.setCurrentQuestion}
            />
            {this.cycles.map(cycle => (
              <CycleButton
                key={cycle}
                cb={this.setCycle}
                name={cycle}
                currentCycle={this.state.cycle}
              />
            ))}
          </div>

          {["setup", "loop"].includes(this.state.cycle) ? (
            <Keyboard
              questionDots={this.state.questionDots}
              answerDots={this.state.answerDots}
              userPlayKey={this.userPlayKey}
            />
          ) : (
            ""
          )}
        </main>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  currentChapter: state.currentChapter,
  currentLesson: state.currentLesson,
  currentQuestion: state.currentQuestion
});

export default connect(mapStateToProps)(Home);
