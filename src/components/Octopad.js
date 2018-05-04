import React, { Component } from "react";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import { Motion, spring } from "react-motion";
import OctoQuestion from "./OctoQuestion";

import "../css/octopad.css";
class Octopad extends Component {
  constructor(props) {
    super(props);
    this.state = {
      round: 0,
      correctAnswer: [],
      studentAnswer: {
        U1: false,
        U2: false,
        U3: false,
        U4: false,
        D1: false,
        D2: false,
        D3: false,
        D4: false
      },
      showGoButton: false,
      answered: [],
      checkBoxes: {},
      revisit: [],
      bool: false
    };
    this.checkAnswer = this.checkAnswer.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.showQuestion = this.showQuestion.bind(this);
  }
  componentDidMount() {
    this.setState({
      correctAnswer: this.props.test.qa[this.state.round].answer
    });
    document.addEventListener("keydown", event => {
      const keyName = event.key;
      this.keyPressesToDots(keyName);
    });
  }
  keyPressesToDots(keyName) {
    switch (keyName) {
      case "a":
        return this.handleClick("D1");
      case "s":
        return this.handleClick("D2");
      case "d":
        return this.handleClick("D3");
      case "f":
        return this.handleClick("D4");
      case "q":
        return this.handleClick("U1");
      case "w":
        return this.handleClick("U2");
      case "e":
        return this.handleClick("U3");
      case "r":
        return this.handleClick("U4");
      case "Enter":
        return this.checkAnswer();
      default:
        return null;
    }
  }
  checkAnswer() {
    const s = this.state;
    const wrongDots = s.correctAnswer.filter(dot => !s.studentAnswer[dot]);
    if (wrongDots.length) {
      this.handleWrongAnswer();
    } else this.handleCorrectAnswer();
  }
  handleWrongAnswer() {
    console.log("nope!");
    this.setState({
      checkBoxes: { ...this.state.checkBoxes, [this.state.round]: "wrong" },
      revisit: [...this.state.revisit, this.state.round]
    });
    this.advanceRound();
  }
  handleCorrectAnswer() {
    console.log("yep!");
    this.setState(
      {
        checkBoxes: { ...this.state.checkBoxes, [this.state.round]: "correct" },
        revisit: this.state.revisit.filter(num => num !== this.state.round)
      },
      () => this.advanceRound()
    );
  }
  findNextRound() {
    const nextRound =
      this.state.round + 1 < this.props.test.qa.length &&
      this.state.checkBoxes[this.state.round + 1] !== "correct"
        ? this.state.round + 1
        : this.state.revisit[0];
    console.log("obj entries", Object.entries(this.state.checkBoxes));
    console.log(nextRound);
    if (nextRound) return nextRound;
    else this.props.advance(true);
  }
  advanceRound() {
    const nextRound = this.findNextRound();
    if (nextRound) {
      this.setState({
        round: nextRound,
        studentAnswer: {
          U1: false,
          U2: false,
          U3: false,
          U4: false,
          D1: false,
          D2: false,
          D3: false,
          D4: false
        },
        showGoButton: false,
        correctAnswer: this.props.test.qa[nextRound].answer
      });
    }
  }
  handleClick(dot) {
    const otherDot = dot[0] === "D" ? `U${dot[1]}` : `D${dot[1]}`;
    const newStudentAnswer = { ...this.state.studentAnswer };
    newStudentAnswer[dot] = !this.state.studentAnswer[dot];
    newStudentAnswer[otherDot] = false;
    this.setState(
      { ...this.state, studentAnswer: newStudentAnswer },
      this.checkIfDone
    );
  }
  checkIfDone() {
    const done =
      Object.values(this.state.studentAnswer).filter(v => v).length === 4;
    if (done) this.checkAnswer();
  }
  showQuestion() {
    this.setState({ showQuestion: true });
  }
  dotNames = ["U1", "U2", "U3", "U4", "D1", "D2", "D3", "D4"];
  render() {
    const { jsx, qa } = this.props.test;
    return (
      <div className="octopad-test">
        <TransitionGroup className="scoreBoard">
          {this.props.test.qa.map((q, i) => {
            switch (this.state.checkBoxes[i]) {
              case "correct":
                return (
                  <CSSTransition
                    key={`check${i}`}
                    classNames="chx"
                    timeout={500}
                  >
                    <div
                      className={`checkBox ${
                        i === this.state.round ? "current" : null
                      }`}
                    >
                      {" "}
                      ✅{" "}
                    </div>
                  </CSSTransition>
                );
              case "wrong":
                return (
                  <CSSTransition
                    key={`nope${i}`}
                    classNames="chx"
                    timeout={500}
                  >
                    <div
                      className={`checkBox ${
                        i === this.state.round ? "current" : null
                      }`}
                    >
                      ❌
                    </div>
                  </CSSTransition>
                );
              case undefined:
                return (
                  <CSSTransition
                    key={`empty${i}`}
                    classNames="chx"
                    timeout={500}
                  >
                    <div
                      className={`checkBox ${
                        i === this.state.round ? "current" : null
                      }`}
                    >
                      {" "}
                      ⬜️{" "}
                    </div>
                  </CSSTransition>
                );
              default:
                return null;
            }
          })}
        </TransitionGroup>

        <div className="octopad-content">
          <OctoQuestion
            jsx={jsx}
            question={qa[this.state.round].question}
            dotNames={this.dotNames}
            studentAnswer={this.state.studentAnswer}
            handleClick={this.handleClick}
            showQuestion={this.showQuestion}
          />

          <Motion
            defaultStyle={{ transform: 0 }}
            style={{
              transform: spring(this.state.showGoButton ? 1 : 0)
            }}
          >
            {s => (
              <button
                style={{
                  transform: `scale(${s.transform})`
                }}
                onClick={() => this.checkAnswer()}
              >
                GO
              </button>
            )}
          </Motion>
        </div>
      </div>
    );
  }
}

export default Octopad;
