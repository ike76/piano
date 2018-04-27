import React, { Component } from "react";
import { lessons } from "../lessons";
import { connect } from "react-redux";
import "../css/question.css";

export class Question extends Component {
  render() {
    const { title, information, cta } = lessons[this.props.currentChapter];
    return (
      <div>
        <h1 className="title"> {title} </h1>
        <p className="information"> {information}</p>
        <p className="cta"> {cta}</p>
        <h3> the currentChapter is {this.props.currentChapter}</h3>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  currentChapter: state.currentChapter,
  currentLesson: state.currentLesson,
  currentQuestion: state.currentQuestion
});

export default connect(mapStateToProps)(Question);
