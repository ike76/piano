import React from "react";
import "../css/learn.css";
import image from "../images/twosAndThrees.png";
const Learn = props => {
  const { title, learnSections, buttonText } = props.chapter;
  return (
    <div className="learn">
      <h1>{title}</h1>
      {/* <img src={image} height={200} /> */}
      {learnSections
        ? learnSections.map(section => (
            <div className="info">
              {section.infoLines.map(line => <p>{line}</p>)}
              {section.images.map(image => (
                <img
                  src={require(`../images/${image.url}`)}
                  height={image.height}
                  width={image.width}
                  className={image.className}
                />
              ))}
            </div>
          ))
        : ""}
      <button>{buttonText || "GO"}</button>
    </div>
  );
};

export default Learn;
