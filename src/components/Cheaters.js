import React, { Component } from "react";
import { connect } from "react-redux";
import Button from "@material-ui/core/Button";
import * as actions from "../actions";
class Cheaters extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  passTest(chapterName, testName) {
    this.props.dispatch(actions.passTest(chapterName, testName));
  }
  render() {
    return (
      <div className="cheaterbuttons">
        <Button
          variant="raised"
          color="primary"
          onClick={() => this.passTest("SHAPES 1", "Shapes")}
        >
          Pass 1
        </Button>
        <Button
          variant="raised"
          color="primary"
          onClick={() => this.passTest("SHAPES 1", "Upside Down Shapes")}
        >
          Pass 2
        </Button>
      </div>
    );
  }
}
const mapStateToProps = state => ({});
export default connect(mapStateToProps)(Cheaters);
