import React from "react";
import { scales } from "../helpers/scales";
import "../css/shapes.css";
const image = (name, width = 300) => (
  <img src={require(`../images/shapes/${name}`)} width={width} />
);

const shapeAnswers = {
  line: ["D1", "D2", "D3", "D4"],
  lineNoDots: ["D1", "D2", "D3", "D4"],
  car: ["D1", "U2", "U3", "D4"],
  carDots: ["D1", "U2", "U3", "D4"],
  carNoDots: ["D1", "U2", "U3", "D4"],
  carFlip: ["U1", "D2", "D3", "U4"],
  carFlipDots: ["U1", "D2", "D3", "U4"],
  carFlipNoDots: ["U1", "D2", "D3", "U4"],
  truck: ["D1", "D2", "U3", "D4"],
  truckDots: ["D1", "D2", "U3", "D4"],
  truckNoDots: ["D1", "D2", "U3", "D4"],
  truckFlip: ["U1", "U2", "D3", "U4"],
  truckFlipDots: ["U1", "U2", "D3", "U4"],
  truckFlipNoDots: ["U1", "U2", "D3", "U4"],
  wagon: ["D1", "D2", "D3", "U4"],
  wagonDots: ["D1", "D2", "D3", "U4"],
  wagonNoDots: ["D1", "D2", "D3", "U4"],
  wagonFlip: ["U1", "U2", "U3", "D4"],
  wagonFlipDots: ["U1", "U2", "U3", "D4"],
  wagonFlipNoDots: ["U1", "U2", "U3", "D4"]
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
                When you break it down, there are really only FOUR shapes to
                learn.
              </p>
              <div className="imageGrid">
                <div className="imageBox">{image("lineDots.png")}</div>
                <div className="imageBox">{image("wagonDots.png")}</div>
                <div className="imageBox">{image("truckDots.png")}</div>
                <div className="imageBox">{image("carDots.png")}</div>
              </div>
              <p>
                Each shape has FOUR dots. all you have to remember is when the
                dots are UP or DOWN.
              </p>
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
                  {image("line.png")}
                  <h3>Line</h3>
                  <p>4 dots in a line</p>
                  <p>(down down down down)</p>
                </div>
                <div className="imageBox">
                  {image("wagon.png")}
                  <h3>Wagon</h3>
                  <p>
                    only the 4th dot is changed{" "}
                    <p>
                      (down down down <strong>UP</strong>)
                    </p>
                  </p>
                </div>
                <div className="imageBox">
                  {image("truck.png")}
                  <h3>Truck</h3>
                  <p>
                    only the 3rd dot is changed{" "}
                    <p>
                      (down down <strong>UP</strong> down){" "}
                    </p>
                  </p>
                </div>
                <div className="imageBox">
                  {image("car.png")}
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
            <p>Can you remember the shapes?</p>
            <p>Ok, here's test. just click the dots.</p>
            <h3>ready?</h3>
          </div>
        )
      },
      test: {
        type: "octopad",
        qa: [
          {
            question: image("car.png"),
            answer: shapeAnswers.car
          },
          { question: image("truck.png"), answer: shapeAnswers.truck },
          { question: image("line.png"), answer: shapeAnswers.line },
          { question: image("carNoDots.png"), answer: shapeAnswers.carNoDots },
          {
            question: image("truckNoDots.png"),
            answer: shapeAnswers.truckNoDots
          },
          {
            question: image("lineNoDots.png"),
            answer: shapeAnswers.lineNoDots
          }
        ], // each of these is a round
        jsx: (
          <div>
            <p>Click the dots to make the shape match the picture:</p>
          </div>
        )
      } // end test
    }, // end lesson 0
    {
      // begin lesson 1
      pages: [
        {
          jsx: (
            <div>
              <p>
                <span className="fancy bigletter">N</span>ow that we know the
                shapes, the next trick is to FLIP them over.
              </p>
              <p>Not so hard, right?</p>
              <p>
                the <strong>LINE</strong> shape doesn't change <br /> (its
                always DOWN-DOWN-DOWN-DOWN),{" "}
              </p>
              <p>
                so you really only have to think about the{" "}
                <strong>Wagon</strong>, <strong>Truck</strong> and{" "}
                <strong>Car</strong>.
              </p>
              <div className="imageGrid">
                <div className="">{image("line.png")}</div>
                <div className="imageFlip">
                  <div>{image("wagon.png")}</div>
                </div>
                <div className="imageFlip">
                  <div>{image("truck.png")}</div>
                </div>
                <div className="imageFlip">
                  <div>{image("car.png")}</div>
                </div>
              </div>
              <p>
                {" "}
                think about each of these upside-down shapes for a few seconds.{" "}
              </p>
              <hr />
              <p>
                for the <strong>WAGON</strong>, remember that only the
                <strong> LAST</strong> dot is different.
              </p>
              <div className="cards">
                <div className="card">
                  <h4>Wagon</h4>
                  <div>{image("wagonDots.png", 150)}</div>
                  <p>
                    down-down-down-<strong>UP</strong>
                  </p>
                </div>
                <div className="card">
                  <h4>FLIP-Wagon</h4>
                  <div className="flipStatic">
                    {image("wagonDots.png", 150)}
                  </div>
                  <p>
                    up-up-up-
                    <strong>DOWN</strong>
                  </p>
                </div>
              </div>
              <hr />
              <p>
                on the <strong>TRUCK</strong>, only the <strong>THIRD </strong>
                dot is different.
              </p>
              <div className="cards">
                <div className="card">
                  <h4>Truck</h4>
                  <div>{image("truckDots.png", 150)}</div>
                  <p>
                    down-down-<strong>UP</strong>-down
                  </p>
                </div>

                <div className="card">
                  <h4>FLIP-Truck</h4>
                  <div className="flipStatic">
                    {image("truckDots.png", 150)}
                  </div>
                  <p>
                    up-up-<strong>DOWN</strong>-up
                  </p>
                </div>
              </div>
              {/*  {end truck cards} */}
              <hr />
              <p>
                the <strong>CAR</strong> has <strong>BOTH</strong> middle dots
                different:
              </p>
              <div className="cards">
                <div className="card">
                  <h4>Car</h4>
                  <div>{image("carDots.png", 150)}</div>
                  <p>
                    down-<strong>UP</strong>-<strong>UP</strong>-down
                  </p>
                </div>

                <div className="card">
                  <h4>FLIP-Car</h4>
                  <div className="flipStatic">{image("carDots.png", 150)}</div>
                  <p>
                    up-<strong>DOWN</strong>-<strong>DOWN</strong>-up
                  </p>
                </div>
              </div>
              {/*  {end car cards} */}
              got it?
            </div>
          )
        }
      ], // end pages array
      setup: {
        jsx: (
          <div>
            <h3>are you ready for another test?</h3>
            <h4>the questions start easy, and get harder as you go</h4>
          </div>
        )
      },
      test: {
        type: "octopad",
        qa: [
          // lesson 2.  flip pix
          { question: image("carFlip.png"), answer: shapeAnswers.carFlip },
          { question: image("truck.png"), answer: shapeAnswers.truck },
          {
            question: image("truckFlipNoDots.png"),
            answer: shapeAnswers.truckFlip
          },
          {
            question: image("wagonFlipNoDots.png"),
            answer: shapeAnswers.wagonFlip
          },
          {
            question: image("carFlipNoDots.png"),
            answer: shapeAnswers.carFlipNoDots
          },
          {
            question: (
              <div className="displayWords">
                <div className="smallWords" />
                <div className="bigWords">WAGON</div>
              </div>
            ),
            answer: shapeAnswers.wagon
          },
          {
            question: (
              <div className="displayWords">
                <div className="smallWords">FLIP</div>
                <div className="bigWords">TRUCK</div>
              </div>
            ),
            answer: shapeAnswers.truckFlipNoDots
          },
          {
            question: (
              <div className="displayWords">
                <div className="smallWords" />
                <div className="bigWords">CAR</div>
              </div>
            ),
            answer: shapeAnswers.car
          },
          {
            question: (
              <div className="displayWords">
                <div className="smallWords">FLIP</div>
                <div className="bigWords">WAGON</div>
              </div>
            ),
            answer: shapeAnswers.wagonFlip
          },
          {
            question: image("line.png"),
            answer: shapeAnswers.line
          },
          {
            question: (
              <div className="displayWords">
                <div className="smallWords" />
                <div className="bigWords">TRUCK</div>
              </div>
            ),
            answer: shapeAnswers.truck
          },
          {
            question: (
              <div className="displayWords">
                <div className="smallWords">FLIP</div>
                <div className="bigWords">CAR</div>
              </div>
            ),
            answer: shapeAnswers.carFlip
          }
        ], // each of these is a round
        jsx: (
          <div>
            <p>Click the dots to make the shape match the picture:</p>
          </div>
        )
      } // end test
    }, // end lesson 1
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
