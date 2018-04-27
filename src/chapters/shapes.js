const shapes = (() => {
  return {
    title: "SHAPES",
    url: "/shapes",
    information: `shapes text`,
    cta: `shapes CTA`,
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

export { shapes };
