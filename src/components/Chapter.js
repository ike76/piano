import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { closeNav } from "../actions";
import chapters from "../chapters";
import Content from "./Content";
import Lesson from "./Lesson";
class Chapter extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    // const { chapter, lessonNumber } = this.state;
    const chapter = chapters[this.props.match.params.chapterName.toLowerCase()];
    const lessonNumber = this.props.match.params.lessonNumber;
    return (
      <section
        className="chapterbox"
        onClick={() => this.props.dispatch(closeNav())}
      >
        {/* <h1 className="title">{chapter.title}</h1> */}
        <Lesson
          lesson={chapter.lessons[lessonNumber]}
          chapterName={chapter.title}
          testName={chapter.lessons[lessonNumber].test.name}
        />
      </section>
    );
  }
}

const mapStateToProps = state => ({
  currentState: state
});
export default withRouter(connect(mapStateToProps)(Chapter));
