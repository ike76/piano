import React, { Component } from "react";
import ScoreMarker from "./ScoreMarker";
import "../css/scoreboard.css";
import { CSSTransition, TransitionGroup } from "react-transition-group";
class Scoreboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      score: this.props.count
    };
  }

  render() {
    return (
      <div className="scoreboard">
        <TransitionGroup>
          {Array(this.props.limitCount)
            .fill("circle")
            .map((e, i) => (i < this.props.count ? this.props.icon : e))
            .reverse()
            .map((e, i) => (
              <CSSTransition key={i} classNames="marker" timeout={3000}>
                <ScoreMarker icon={e} />
              </CSSTransition>
            ))}
        </TransitionGroup>
      </div>
    );
  }
}

export default Scoreboard;
// count
