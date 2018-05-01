import React from "react";

const Setup = props => {
  return (
    <div>
      {props.setup.jsx}
      <button onClick={props.advance}>GO</button>
    </div>
  );
};

export default Setup;
