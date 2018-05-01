import React, { Component } from "react";
import Keyboard from "./Keyboard";
import Scoreboard from "./Scoreboard";
import { playSound } from "../js/audiosynth";

import "../css/test.css";
class Test extends Component {
  constructor(props) {
    super(props);
    this.state = {
      questionDots: [],
      answerDots: [],
      correctDots: [],
      wrongDots: [],
      blinkingDots: [],
      correctAnswer: [],
      studentAnswer: [],
      listening: false,
      playing: false,
      speed: 500,
      timeBetweenRounds: 3000,
      round: 0,
      macNoteIndex: 0,
      correctCount: 0,
      mistakeCount: 0,
      frown: false,
      acceptableMistakes: 3,
      requiredCorrect: 5,
      altHeader: ""
    };
    this.userPlayKey = this.userPlayKey.bind(this);
    this.checkAnswer = this.checkAnswer.bind(this);
  }
  componentDidMount() {
    this.askQuestion();
  }
  userPlayKey(noteName) {
    playSound(noteName);
    if (this.state.listening) {
      this.setState(
        {
          answerDots: [...this.state.answerDots, noteName],
          studentAnswer: [...this.state.studentAnswer, noteName]
        },
        this.checkAnswer
      );
    }
  }
  checkAnswer() {
    let correct = this.state.correctAnswer;
    let student = this.state.studentAnswer;
    console.log("correct", correct);
    console.log("student", student);
    if (correct.length !== student.length) return null;
    const wrongNotes = student.filter((note, i) => note !== correct[i]);
    console.log("wrongNotes", wrongNotes);
    wrongNotes.length
      ? this.handleWrongAnswer(wrongNotes)
      : this.handleCorrectAnswer();
  }
  handleWrongAnswer(wrongNotes) {
    const s = this.state;
    const correctNotChosen = s.correctAnswer.filter(
      note => !s.studentAnswer.includes(note)
    );

    const wrongMessage = (
      <div>
        <p>
          ooh sorry. notice the (blinking) correct answer and then
          <button onClick={() => this.advanceRound(1, 0, "reset")}>
            {" "}
            CONTINUE{" "}
          </button>
        </p>
      </div>
    );
    this.setState(
      {
        wrongDots: wrongNotes,
        answerDots: [],
        mistakeCount: s.mistakeCount + 1,
        blinkingDots: correctNotChosen,
        frown: true
      },
      () => {
        if (s.mistakeCount === s.acceptableMistakes - 1) {
          return this.fail();
        } else this.setState({ altHeader: wrongMessage });
      }
    );
  }
  playSuccessSound() {
    console.log(this.sound);
    this.sound.play();
  }
  handleCorrectAnswer() {
    console.log("YEP");
    this.playSuccessSound();
    this.setState(
      {
        correctDots: this.state.answerDots,
        correctCount: this.state.correctCount + 1,
        answerDots: [],
        correctAnswer: [],
        studentAnswer: [],
        listening: false
      },
      () => {
        if (this.state.correctCount === this.state.requiredCorrect) {
          this.pass();
        } else this.advanceRound();
      }
    );
  }
  pass() {
    setTimeout(() => this.props.advance(true), 1000);
  }
  fail() {
    setTimeout(() => this.props.advance(false), 1000);
  }
  advanceRound(
    numToAdvance = 1,
    delay = this.state.timeBetweenRounds,
    resetScore = false
  ) {
    setTimeout(() => {
      console.log("round advancing");
      this.setState(
        {
          round: this.state.round + numToAdvance,
          macNoteIndex: 0,
          altHeader: "",
          questionDots: [],
          answerDots: [],
          correctDots: [],
          wrongDots: [],
          blinkingDots: [],
          correctAnswer: [],
          studentAnswer: []
        },
        () => {
          if (resetScore) {
            this.setState({
              frown: false,
              correctCount: 0
            });
          }
        }
      );
      this.askQuestion();
    }, delay);
  }
  macPlayKey(noteName) {
    noteName ? playSound(noteName) : null;
  }
  enterTestNote(noteName) {
    this.macPlayKey(noteName);
    this.setState({ questionDots: [...this.state.questionDots, noteName] });
    // this needs to know whether to paint dots or not.   later they will only paint the first dot.
    console.log("enterTestNote", noteName);
  }
  askQuestion() {
    let qa = this.props.test.qa[this.state.round];
    this.setState({ correctAnswer: qa.answer });
    const timedFxn = () => {
      if (this.state.macNoteIndex >= qa.question.length - 1) {
        clearInterval(timer);
        this.setState({ listening: true });
      }
      this.enterTestNote(qa.question[this.state.macNoteIndex]);
      this.setState({ macNoteIndex: this.state.macNoteIndex + 1 });
    };
    let timer = setInterval(timedFxn, this.state.speed); // this plays the test notes
  }
  chooseTestType() {
    switch (this.props.test.type) {
      case "keyboard":
        return (
          <Keyboard
            questionDots={this.state.questionDots}
            correctDots={this.state.correctDots}
            answerDots={this.state.answerDots}
            blinkingDots={this.state.blinkingDots}
            wrongDots={this.state.wrongDots}
            userPlayKey={this.userPlayKey}
          />
        );
      default:
        return null;
    }
  }
  render() {
    // if (whatever) return
    return (
      <div>
        {this.state.altHeader || this.props.test.jsx}
        <div className="keysContainer">
          <div className="keys scores">
            <audio ref={sound => (this.sound = sound)}>
              <source src={require("../sounds/keys.wav")} type="audio/wav" />
            </audio>
            <Scoreboard
              count={this.state.correctCount}
              icon={this.state.frown ? "frownFace" : "starEyes"}
              limitCount={this.state.requiredCorrect}
            />
            {this.chooseTestType()}
            <Scoreboard
              count={this.state.mistakeCount}
              icon="skull"
              limitCount={this.state.acceptableMistakes}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Test;
