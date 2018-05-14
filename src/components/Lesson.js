import React, { Component } from "react";
import Content from "./Content";
import Test from "./Test";
import Setup from "./Setup";
import Response from "./Response";
import "../css/setup.css";
import Octopad from "./Octopad";
class Lesson extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // page: 0,
      cycle: "content",
      done: false
    };
    this.advance = this.advance.bind(this);
    this.backToContent = this.backToContent.bind(this);
  }

  advance(done = false) {
    console.log("advance was caled");
    let cycles = ["content", "setup", "test", "response"];
    let index = cycles.indexOf(this.state.cycle);
    this.setState({
      cycle: cycles[index + 1],
      done
    });
  }
  backToContent() {
    this.setState({ cycle: "content" });
  }
  chooseTestType(p) {
    switch (p.lesson.test.type) {
      case "keyboard":
        return (
          <Test test={p.lesson.test} advance={this.advance} start={true} />
        );
      case "octopad":
        return <Octopad test={p.lesson.test} advance={this.advance} />;
    }
  }

  cyclePicker(s, p) {
    switch (this.state.cycle) {
      case "content":
        return <Content pages={p.lesson.pages} advance={this.advance} />;
      case "setup":
        return (
          <div className="setup-test">
            <Setup setup={p.lesson.setup} advance={this.advance} />
            {this.chooseTestType(p)}
          </div>
        );
      case "test":
        return this.chooseTestType(p);
      case "response":
        console.log("now we shall render a response");
        return (
          <Response
            done={s.done}
            backToContent={this.backToContent}
            nextLesson={this.nextLesson}
            testName={p.testName}
            chapterName={p.chapterName}
          />
        );
      case "debug":
        return <Test test={p.lesson.test} start={false} />;
      default:
        return null;
    }
  }
  render() {
    const s = this.state;
    const p = this.props;
    return (
      <div>
        <h1>{p.lesson.title}</h1>
        {this.cyclePicker(s, p)}
      </div>
    );
  }
}

export default Lesson;
