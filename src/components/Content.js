import React, { Component } from "react";
import Page from "./Page";
import "../css/content.css";
import { CSSTransition } from "react-transition-group";
class Content extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pageNum: 0
    };
  }
  advance = () => {
    if (this.state.pageNum < this.props.pages.length - 1) {
      this.setState({ pageNum: this.state.pageNum + 1 });
    } else {
      console.log("ok lets go");
      this.props.advance();
    }
  };
  goBack = () => {
    if (this.state.pageNum > 0)
      this.setState({ pageNum: this.state.pageNum - 1 });
  };
  render() {
    const s = this.state;
    const p = this.props;
    return (
      <div>
        <CSSTransition classNames="dooky" timeout={2000} in={true}>
          <div className="dooky">TRANSITION</div>
        </CSSTransition>
        <Page page={p.pages[s.pageNum]} />
        {this.state.pageNum > 0 ? (
          <button onClick={this.goBack}>← BACK</button>
        ) : (
          ""
        )}
        <button onClick={this.advance}>
          {p.pages[s.pageNum].buttonText || "NEXT →"}
        </button>
      </div>
    );
  }
}

export default Content;

// TODO  create forward and back buttons to move between pages, if there are more than 1.
// STYLE this content section.  give it a border, background color.  place the buttons.
