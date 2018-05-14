import React from "react";
import { connect } from "react-redux";
import { PASS_TEST, passTest } from "../actions";
const Response = props => {
  if (props.done) {
    const saveAndContinue = () => {
      props.dispatch(passTest(props.chapterName, props.testName));
    };
    return (
      <div>
        <h3>HEY! you did it. congrats.</h3>
        <p>onward and upward</p>
        <button onClick={() => saveAndContinue()}>SAVE and CONTINUE</button>
      </div>
    );
  } else {
    return (
      <div>
        <div className="responseEmojis">☠️☠️☠️</div>
        <h3> hmmm... lets give that lesson another look.. </h3>
        <button onClick={props.backToContent}>CONTINUE</button>
      </div>
    );
  }
};

const mapStateToProps = state => {};

export default connect(mapStateToProps)(Response);
