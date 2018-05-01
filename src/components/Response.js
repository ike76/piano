import React from "react";

const Response = props => {
  if (props.done) {
    return (
      <div>
        <h3>HEY! you did it. congrats.</h3>
        <p>onwards and upwards</p>
        <button onClick={props.nextLesson}>CONTINUE</button>
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

export default Response;
