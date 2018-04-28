import React, { Component } from "react";
import Content from "./Content";

class Lesson extends Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 0,
      cycle: "content"
    };
  }
  advance() {}
  render() {
    const s = this.state;
    const p = this.props;
    return (
      <div>
        <Content pages={p.lesson.pages} />
        {/* <div>{p.lesson.pages[s.page].jsx}</div> */}
      </div>
    );
  }
}

export default Lesson;
