import React, { Component } from "react";
import { TransitionGroup, CSSTransition } from "react-transition-group";

class OctoQuestion extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { question, dotNames, jsx } = this.props;
    return (
      <div>
        {jsx}
        {question}
        <div className="octopad-holder">
          <TransitionGroup className="octopad">
            {dotNames.map(
              name =>
                this.state.studentAnswer[name] ? (
                  <CSSTransition key={name} classNames="bluedot" timeout={300}>
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
            )}{" "}
            // end dotNames.map
          </TransitionGroup>
        </div>
      </div>
    );
  } // end render
} // end class OctoQuestion

export default OctoQuestion;
