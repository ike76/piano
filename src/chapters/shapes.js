import React from "react";

const shapes = {
  title: "SHAPES",
  lessons: [
    {
      pages: [
        {
          jsx: (
            <div>
              <p>i hope you're learning a lot about shapes</p>
            </div>
          ),
          buttonText: "next"
        },
        {
          jsx: (
            <div>
              <h1>Further information</h1>;
              <p>this is the 2nd page of this shapes content</p>
            </div>
          ),
          buttonText: "continue"
        }
      ] // end pages array
    } // end lesson 0
  ], // end lessons array
  test: {}
};

export { shapes };
