import React from "react";
import "../css/learn.css";
import image from "../images/twosAndThrees.png";
import { stick } from "../chapters/stick.jsx";

const Learn = props => {
  const { title, lessons, buttonText } = props.chapter;
  const lesson = lessons[props.currentLesson];
  return (
    <div className="learn">
      <h1>{title}</h1>
      {/* <img src={image} height={200} /> */}
      <div className="info">
        {lesson.infoLines.map(line => <p>{line}</p>)}
        {lesson.images.map(image => (
          <img
            src={require(`../images/${image.url}`)}
            height={image.height}
            width={image.width}
            className={image.className}
          />
        ))}
      </div>
      <button className="" onClick={() => props.cb(props.currentLesson + 1)}>
        {buttonText || "GO"}
      </button>
    </div>
  );
};

export default Learn;
