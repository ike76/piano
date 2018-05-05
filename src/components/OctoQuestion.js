import React, { Component } from "react";
import { TransitionGroup, CSSTransition } from "react-transition-group";

class OctoQuestion extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {
    this.props.showQuestion();
    console.log("octoQuestion mounted");
  }
  render() {
    const { question, dotNames, jsx, studentAnswer, handleClick } = this.props;
    return (
      <div>
        {jsx}
        {question}
        <div className="octopad-holder">
          <div className="octopad">
            {dotNames.map(name => (
              <TransitionGroup className="dotContainer">
                <div
                  className="keyLetter"
                  onMouseDown={() => handleClick(name.dot)}
                >
                  {name.key}
                </div>
                {studentAnswer[name.dot] ? (
                  <CSSTransition
                    key={name.dot + "blue"}
                    classNames="bluedot"
                    timeout={300}
                  >
                    <span
                      className="dotSpan"
                      onMouseDown={() => handleClick(name.dot)}
                    >
                      🔵
                    </span>
                  </CSSTransition>
                ) : (
                  <CSSTransition
                    key={name.dot}
                    classNames="whitedot"
                    timeout={300}
                  >
                    <span
                      className="dotSpan"
                      onMouseDown={() => handleClick(name.dot)}
                    >
                      🔘
                    </span>
                  </CSSTransition>
                )}
              </TransitionGroup>
            ))}
          </div>
        </div>
      </div>
    );
  } // end render
} // end class OctoQuestion

export default OctoQuestion;

{
  //   <TransitionGroup className="octopad">
  //   {dotNames.map(
  //     name =>
  //       studentAnswer[name] ? (
  //         <CSSTransition key={name} classNames="bluedot" timeout={300}>
  //           <span onMouseDown={() => handleClick(name)}>🔵</span>
  //         </CSSTransition>
  //       ) : (
  //         <CSSTransition
  //           key={`white${name}`}
  //           classNames="bluedot"
  //           timeout={300}
  //         >
  //           <span onMouseDown={() => handleClick(name)}>🔘</span>
  //         </CSSTransition>
  //       )
  //   )}
  // </TransitionGroup>
}
