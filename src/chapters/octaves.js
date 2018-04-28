// TODO turn this into an object {octaves: etc}
const octaves = (() => {
  return {
    title: "OCTAVES",
    url: "/octaves",
    lessons: [
      {
        infoLines: [
          `There are many keys on a piano (up to 88!)`,
          `But you only have to learn 12. after that they repeat. `,
          `Notice how the black keys are a repeating pattern of 2 - 3 - 2 - 3 etc?`
        ],
        images: [
          { url: "twosAndThrees.png", height: 200, className: "myimage" }
        ],
        buttonText: "GOT IT"
      }
    ],

    cta: `I'll select a note and you choose the matching one`,
    tests: [
      {
        questionNotes: [{ note: "F#1" }],
        correctAnswer: ["F#2"]
      },
      {
        questionNotes: [{ note: "A2" }],
        correctAnswer: ["A1"]
      },
      {
        questionNotes: [{ note: "D2" }],
        correctAnswer: ["D1"]
      },
      {
        questionNotes: [{ note: "E1" }],
        correctAnswer: ["E2"]
      }
    ]
  };
})();

export { octaves };
