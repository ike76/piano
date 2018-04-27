// import keyboardReducer from "./keyboardReducer";
// import testReducer from "./testReducer";
import * as actions from "../actions";
import Synth from "../js/audiosynth";
Synth.setSampleRate(20000);
const piano = Synth.createInstrument("piano");

function playNote(keyName) {
  let octave = Number(keyName.split("").pop());
  let note = keyName.slice(0, -1);
  piano.play(note, octave + 2, 2);
}

const initialState = {
  correctAnswer: ["C2", "D2", "E2", "F2"], // this will be updtated by the test question
  userClickedKeys: [],
  studentAnswer: [], // this gets updated by student input
  wrongKeys: [],
  listening: false,
  currentLesson: 0,
  testNum: 0,
  questionDots: [],
  answerDots: [],
  responseText: ""
};

function checkAnswer(studentAnswer, correctAnswer) {
  if (studentAnswer.length !== correctAnswer.length) return false;
  // return the incorrect notes
  return studentAnswer.filter((note, i) => note !== correctAnswer[i]);
}
function resetQuestion() {
  console.log("resetting question");
}

export default function allReducer(store = initialState, action) {
  function handleCorrectAnswer() {
    console.log("YEAH you win");
    return {
      correctAnswer: [],
      studentAnswer: [],
      responseText: "YES! correct",
      testNum: store.testNum + 1
    };
  }
  function handleWrongAnswer() {
    console.log("nope!");
    return {
      responseText: "Nope!  try again",
      studentAnswer: []
    };
  }
  if (action.type === actions.USER_CLICKED_KEY) {
    playNote(action.keyName);
    const newStore = {
      ...store,
      userClickedKeys: [...store.userClickedKeys, action.keyName],
      answerDots: [...store.answerDots, action.keyName]
    };
    if (store.listening) {
      newStore.studentAnswer = [...store.studentAnswer, action.keyName];
      const checkResponse = checkAnswer(
        newStore.studentAnswer,
        store.correctAnswer
      );
      if (checkResponse) {
        if (checkResponse.length === 0) {
          return { ...newStore, ...handleCorrectAnswer() };
        } else {
          return { ...newStore, ...handleWrongAnswer() };
        }
      }
    }
    return newStore;
  }

  if (action.type === actions.SET_CORRECT_ANSWER) {
    return { ...store, correctAnswer: action.correctAnswer };
  }
  if (action.type === actions.LISTEN) {
    return { ...store, listening: true };
  }
  if (action.type === actions.SHOW_QUESTION) {
    //questionNotes
    const newStore = { ...store };
    newStore.questionDots = action.questionNotes.map(notes => notes.note);
    newStore.answerDots = [];
    newStore.responseText = "";
    //TODO conditional for if it is to be shown or not which would be in this obj
    return newStore;
  }
  if (action.type === actions.LISTEN) {
    return { ...store, listening: true };
  }
  // if (action.type === actions.USER_CLICKED_KEY) {
  //   playNote(action.keyName);
  //   if (store.listening)
  //     return { ...store, answerDots: [...store.answerDots, action.keyName] };
  // }
  if (action.type === actions.MAC_CLICKED_KEY) {
    playNote(action.keyName);
  }
  if (action.type === actions.RESET_KEYBOARD) {
    return { ...store, questionDots: [], answerDots: [] };
  }
  return store;
}
