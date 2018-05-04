import React from "react";
import "../css/setup.css";

const Setup = props => {
  return (
    <div className="setup">
      {props.setup.jsx}
      <button onClick={props.advance}>GO</button>
    </div>
  );
};

export default Setup;
