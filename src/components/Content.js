import React, { Component } from "react";
import Page from "./Page";
class Content extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pageNum: 0
    };
  }
  render() {
    const s = this.state;
    const p = this.props;
    return (
      <div>
        <p>this content has {p.pages.length} pages</p>
        <Page page={p.pages[s.pageNum]} />
      </div>
    );
  }
}

export default Content;

// TODO  create forward and back buttons to move between pages, if there are more than 1.
// STYLE this content section.  give it a border, background color.  place the buttons.
