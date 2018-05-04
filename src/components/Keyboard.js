import React, { Component } from "react";
import Key from "./Key";
import Dot from "./Dot";
import notesList from "../js/notesList";
import { TransitionGroup, CSSTransition } from "react-transition-group";

import "../css/keyboard.css";

export default class Keyboard extends Component {
  replaceSharps(str) {
    return str.replace("#", "sharp");
  }
  render() {
    return (
      <div className="keyboard-frame">
        <div className="keyboard">
          {this.props.questionDots.map(key => (
            <Dot
              key={key}
              keyName={key}
              className={"orange "}
              shape={"circle"}
              userPlayKey={this.props.userPlayKey}
            />
          ))}
          <TransitionGroup>
            {this.props.fadeDots.map(key => (
              <CSSTransition key={key} classNames="fadein" timeout={500}>
                <Dot
                  keyName={key}
                  className={"fade"}
                  shape={"circle"}
                  userPlayKey={this.props.userPlayKey}
                />
              </CSSTransition>
            ))}
          </TransitionGroup>
          {this.props.answerDots.map(key => {
            return (
              <Dot
                key={key}
                keyName={key}
                className={"blue"}
                shape={"filledCircle"}
                userPlayKey={this.props.userPlayKey}
              />
            );
          })}
          <TransitionGroup>
            {this.props.correctDots.map((note, i) => {
              return (
                <CSSTransition
                  key={note + i}
                  timeout={500}
                  classNames={`winner${this.props.correctCount}`}
                >
                  <Dot
                    keyName={note}
                    endPosition={note}
                    className={"blue"}
                    shape={"smile"}
                    userPlayKey={() => null}
                  />
                </CSSTransition>
              );
            })}
          </TransitionGroup>

          {this.props.blinkingDots.map(key => {
            return (
              <Dot
                style={{ zIndex: 2 }}
                key={key}
                keyName={key}
                className={"red blink"}
                shape={"red"}
                userPlayKey={() => null}
              />
            );
          })}
          <TransitionGroup>
            {this.props.wrongDots.map(key => {
              return (
                <CSSTransition
                  key={key}
                  timeout={500}
                  classNames={`loser${this.props.mistakeCount}`}
                >
                  <Dot
                    key={key}
                    keyName={key}
                    className={"red "}
                    shape={"wrong"}
                    userPlayKey={() => null}
                  />
                </CSSTransition>
              );
            })}
          </TransitionGroup>

          <svg width="700px" height="300px" viewBox="0 0 700 300" version="1.1">
            <g id="octave-1">
              {notesList
                .filter(note => note.octave === 1)
                .map(key => (
                  <Key
                    key={key.noteName + key.octave}
                    noteName={key.noteName}
                    keypath={key.note}
                    classes={key.color}
                    octave={key.octave}
                    userPlayKey={this.props.userPlayKey}
                  />
                ))}
            </g>
            <g id="octave-2" transform="translate(350.5,0)">
              {notesList
                .filter(note => note.octave === 2)
                .map(key => (
                  <Key
                    key={key.noteName + key.octave}
                    noteName={key.noteName}
                    keypath={key.note}
                    classes={key.color}
                    octave={key.octave}
                    userPlayKey={this.props.userPlayKey}
                  />
                ))}
            </g>
          </svg>
        </div>
      </div>
    );
  }
}
