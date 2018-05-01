import React from "react";
import notesList from "../js/notesList";
import { shuffleArray } from "../helpers";

const image = (name, width = 300) => (
  <img src={require(`../images/${name}`)} width={width} />
);

const randomOctaveTest = () => {
  const randomNotes = shuffleArray(notesList);
  return randomNotes.map(note => ({
    question: [note],
    answer: [
      note.split("").pop() === "1"
        ? note.slice(0, -1) + "2"
        : note.slice(0, -1) + "1"
    ]
  }));
};

const octaves = {
  title: "OCTAVES",
  lessons: [
    {
      pages: [
        {
          jsx: (
            <div>
              <p>
                <span className="fancy bigletter">W</span>hen you first look at
                the piano it seems like there are a lot of keys, but really
                there are only <span className="fancy">12</span>.
              </p>
              <p>
                The repeating pattern of black keys shows you where you are:
              </p>
              {image("twosAndThrees.png")}
              <p>
                Each note has a name, but we won't worry about names for now.
              </p>
            </div>
          )
          //   buttonText: ""
        },
        {
          jsx: (
            <div>
              <p>
                The key just to the left of the set of 3 black keys is named
                "F."
              </p>
              <p>
                Here you can see both 'Fs' marked.
                <br />
                Notice that they both are in the same place relative to the 3
                black keys. <br /> any time you see 3 black keys together, the
                white key just to the left is an
                <span className="fancy">F</span>.
              </p>
              {image("Fs.png")}
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

            {image("octaveSetup.png")}
            <h3>ready?</h3>
          </div>
        )
      },
      test: {
        type: "keyboard",
        qa: randomOctaveTest(), // each of these is a round
        jsx: <h1>play the other octave:</h1>
      } // end test
    } // end lesson 0
  ] // end lessons array
};

export { octaves };
