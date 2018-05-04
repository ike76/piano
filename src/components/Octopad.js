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
      bool: false
    };
    this.checkAnswer = this.checkAnswer.bind(this);
  }
  componentDidMount() {
    this.setState({
      correctAnswer: this.props.test.qa[this.state.round].answer
    });
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

    this.advanceRound();
  }
  handleCorrectAnswer() {
    console.log("yep!");
    this.setState(
      {
        answered: [...this.state.answered, this.state.round]
      },
      () => this.advanceRound()
    );
  }
  advanceRound() {
    console.log("this.state.round", this.state.round);
    console.log("this.props.test.qa.length", this.props.test.qa.length);
    const nextRound =
      this.state.round + 1 < this.props.test.qa.length
        ? this.state.round + 1
        : 0;
    console.log("next round", nextRound);
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
    if (done) this.setState({ showGoButton: true });
    else this.setState({ showGoButton: false });
  }
  dotNames = ["U1", "U2", "U3", "U4", "D1", "D2", "D3", "D4"];
  toggle(bool) {
    this.setState({ bool });
  }
  render() {
    const { jsx, qa } = this.props.test;
    return (
      <div className="octopad-test">
        <TransitionGroup className="scoreBoard">
          {this.props.test.qa.map(
            (q, i) =>
              this.state.answered.includes(i) ? (
                <CSSTransition key={`check${i}`} classNames="chx" timeout={500}>
                  <div className="checkBox"> ✅ </div>
                </CSSTransition>
              ) : (
                <CSSTransition classNames="chx" key={`empty${i}`} timeout={500}>
                  <div className="checkBox"> ⬜️ </div>
                </CSSTransition>
              )
          )}
        </TransitionGroup>

        <div className="octopad-content">
          <OctoQuestion
            jsx={jsx}
            question={qa[this.state.round].question}
            dotNames={this.dotNames}
            studentAnswer={this.state.studentAnswer}
          />
          {jsx}
          <div>{qa[this.state.round].question}</div>
          <div className="octopad-holder">
            <TransitionGroup className="octopad">
              {this.dotNames.map(
                name =>
                  this.state.studentAnswer[name] ? (
                    <CSSTransition
                      key={name}
                      classNames="bluedot"
                      timeout={300}
                    >
                      <span onClick={() => this.handleClick(name)}>🔵</span>
                    </CSSTransition>
                  ) : (
                    <CSSTransition
                      key={`white${name}`}
                      classNames="bluedot"
                      timeout={300}
                    >
                      <span onClick={() => this.handleClick(name)}>🔘</span>
                    </CSSTransition>
                  )
              )}
            </TransitionGroup>
          </div>

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
