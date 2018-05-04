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
                {studentAnswer[name] ? (
                  <CSSTransition
                    key={name + "blue"}
                    classNames="bluedot"
                    timeout={300}
                  >
                    <span
                      className="dotSpan"
                      onMouseDown={() => handleClick(name)}
                    >
                      🔵
                    </span>
                  </CSSTransition>
                ) : (
                  <CSSTransition key={name} classNames="whitedot" timeout={300}>
                    <span
                      className="dotSpan"
                      onMouseDown={() => handleClick(name)}
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
