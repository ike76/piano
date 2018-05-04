import React, { Component } from "react";
import ScoreMarker from "./ScoreMarker";
import "../css/scoreboard.css";
import "../css/scoremarker.css";
import { CSSTransition, TransitionGroup } from "react-transition-group";
class Scoreboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      score: this.props.count
    };
  }

  render() {
    const arr = Array(this.props.required)
      .fill("circle")
      .map((e, i) => (i < this.props.count ? this.props.icon : e))
      .reverse();
    return (
      <div className="scoreboard">
        <TransitionGroup>
          {arr.map((e, i) => (
            <CSSTransition
              key={e + i}
              timeout={{ enter: 2000, exit: 0 }}
              classNames="score"
            >
              <ScoreMarker icon={e} />
            </CSSTransition>
          ))}
        </TransitionGroup>
      </div>
    );
  }
}

export default Scoreboard;
