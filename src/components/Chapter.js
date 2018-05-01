import React, { Component } from "react";
import { connect } from "react-redux";
import chapters from "../chapters";
import Content from "./Content";
import Lesson from "./Lesson";
class Chapter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chapter: chapters[this.props.match.params.chapterName],
      lessonNumber: this.props.match.params.lessonNumber
    };
  }

  render() {
    const s = this.state;
    const p = this.props;
    return (
      <section className="chapterbox">
        <h1 className="title">{s.chapter.title}</h1>
        <Lesson lesson={s.chapter.lessons[s.lessonNumber]} />
      </section>
    );
  }
}

const mapStateToProps = state => ({
  currentState: state
});
export default connect(mapStateToProps)(Chapter);
