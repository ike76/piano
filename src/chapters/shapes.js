import React from "react";
import { scales } from "../helpers/scales";
import "../css/shapes.css";
const image = (name, width = 300) => (
  <img src={require(`../images/shapes/${name}`)} width={width} />
);

const shapeAnswers = {
  line: ["D1", "D2", "D3", "D4"],
  car1: ["D1", "U2", "U3", "D4"],
  car2: ["U1", "D2", "D3", "U4"],
  truck1: ["D1", "D2", "U3", "D4"],
  truck2: ["U1", "U2", "D3", "U4"],
  wagon1: ["D1", "D2", "D3", "U4"],
  wagon2: ["U1", "U2", "U3", "D4"]
};

const shapes = {
  title: "SHAPES",
  lessons: [
    {
      pages: [
        {
          jsx: (
            <div>
              <p>
                <span className="fancy bigletter">T</span>he secret to learning
                piano scales is to <em>visualize</em> the patterns.
              </p>
              <p>
                Each shape has FOUR dots. all you have to remember is when the
                dots are UP or DOWN.
              </p>
              <p>
                When you break it down, there are really only FOUR shapes to
                learn.
              </p>
              <div className="imageGrid">
                <div className="imageBox">{image("lineDots.png")}</div>
                <div className="imageBox">{image("wagonDots.png")}</div>
                <div className="imageBox">{image("truckDots.png")}</div>
                <div className="imageBox">{image("carDots.png")}</div>
              </div>
              <p>Do you think you could remember those?</p>
              <p>they all have 4 dots.</p>
              <p>Next I'll show you a little trick how to remember them.</p>
            </div>
          )
        },
        {
          jsx: (
            <div>
              <p>
                Lets think of those four shapes as a <strong>Line</strong>,
                <strong> Wagon</strong>, <strong> Truck</strong>, and
                <strong> Car</strong>.
              </p>
              <div className="imageGrid">
                <div className="imageBox">
                  {image("Line.png")}
                  <h3>Line</h3>
                  <p>4 dots in a line</p>
                </div>
                <div className="imageBox">
                  {image("Wagon.png")}
                  <h3>Wagon</h3>
                  <p>
                    only the 4th dot is changed{" "}
                    <p>
                      (down down down <strong>UP</strong>)
                    </p>
                  </p>
                </div>
                <div className="imageBox">
                  {image("Truck.png")}
                  <h3>Truck</h3>
                  <p>
                    only the 3rd dot is changed{" "}
                    <p>
                      (down down <strong>UP</strong> down){" "}
                    </p>
                  </p>
                </div>
                <div className="imageBox">
                  {image("Car.png")}
                  <h3>Car</h3>
                  <p>
                    the 2nd and 3rd dots are changed{" "}
                    <p>
                      (down <strong>UP</strong> <strong>UP</strong> down)
                    </p>
                  </p>
                </div>
              </div>
            </div>
          ),
          buttonText: ""
        }
      ], // end pages array
      setup: {
        jsx: (
          <div>
            <p>
              octaves This keyboard has 2 of each note. (2 full <em>octaves</em>)
            </p>
            <p>I'll play a note, then you play back the OTHER one.</p>
            <p>for example, if I play the blue note, you play the red one.</p>

            <h3>ready?</h3>
          </div>
        )
      },
      test: {
        type: "octopad",
        qa: [
          { question: image("Car.png"), answer: shapeAnswers.car1 },
          { question: image("Truck.png"), answer: shapeAnswers.truck1 },
          { question: image("Line.png"), answer: shapeAnswers.line },
          { question: image("carNoDots.png"), answer: shapeAnswers.car1 },
          { question: image("truckNoDots.png"), answer: shapeAnswers.truck1 },
          { question: image("lineNoDots.png"), answer: shapeAnswers.line }
        ], // each of these is a round
        jsx: (
          <div>
            <p>Click the dots to make the shape match the picture:</p>
          </div>
        )
      } // end test
    }, // end lesson 0
    {
      pages: [
        {
          jsx: (
            <div>
              <p>
                <span className="fancy bigletter">T</span>his is the 2nd lesson.
              </p>
              <p>Blah blah bah</p>
              <p>
                When you break it down, there are really only FOUR shapes to
                learn.
              </p>
              <div className="imageGrid">
                <div className="imageBox">{image("lineDots.png")}</div>
                <div className="imageBox">{image("wagonDots.png")}</div>
                <div className="imageBox">{image("truckDots.png")}</div>
                <div className="imageBox">{image("carDots.png")}</div>
              </div>
              <p>Do you think you could remember those?</p>
              <p>they all have 4 dots.</p>
              <p>Next I'll show you a little trick how to remember them.</p>
            </div>
          )
        }
      ], // end pages array
      setup: {
        jsx: (
          <div>
            <p>
              octaves This keyboard has 2 of each note. (2 full <em>octaves</em>)
            </p>
            <p>I'll play a note, then you play back the OTHER one.</p>
            <p>for example, if I play the blue note, you play the red one.</p>

            <h3>ready?</h3>
          </div>
        )
      },
      test: {
        type: "keyboard",
        qa: [
          {
            question: scales.B1,
            show: ["show", "show", "show", "show"]
          },
          {
            question: scales.E1,
            show: ["show", "fade", "fade", "fade"]
          }
        ], // each of these is a round
        jsx: (
          <div>
            <p>Click the dots to make the shape match the picture:</p>
          </div>
        )
      } // end test
    } // end lesson 1
  ] // end lessons array
};

export { shapes };
