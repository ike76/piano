import * as actions from "../actions";

const initialState = {
  correctAnswer: ["C2", "D2", "E2", "F2"], // this will be updtated by the test question
  userClickedKeys: [],
  studentAnswer: [], // this gets updated by student input
  wrongKeys: [],
  listening: false,
  currentLesson: 0,
  testNum: 0
};

function checkAnswer(studentAnswer, correctAnswer) {
  if (studentAnswer.length !== correctAnswer.length) return false;
  // return the incorrect notes
  return studentAnswer.filter((note, i) => note !== correctAnswer[i]);
}
function resetQuestion() {
  console.log("resetting question");
}

export default function testReducer(store = initialState, action) {
  function handleCorrectAnswer() {
    console.log("YEAH you win");
    return {
      ...store,
      correctAnswer: [],
      studentAnswer: [],
      testNum: store.testNum + 1
    };
  }
  function handleWrongAnswer() {
    console.log("you LOSE");
    return store;
  }
  if (action.type === actions.USER_CLICKED_KEY) {
    const newStore = {
      ...store,
      userClickedKeys: [...store.userClickedKeys, action.keyName]
    };
    if (store.listening) {
      newStore.studentAnswer = [...store.studentAnswer, action.keyName];
      const check = checkAnswer(newStore.studentAnswer, store.correctAnswer);
      if (check) {
        if (check.length === 0) return handleCorrectAnswer();
        else return handleWrongAnswer();
      }
    }
    return newStore;
  }
  if (action.type === actions.SHOW_QUESTION) {
    const newStore = { ...store };
    return newStore;
  }
  if (action.type === actions.SET_CORRECT_ANSWER) {
    return { ...store, correctAnswer: action.correctAnswer };
  }
  if (action.type === actions.LISTEN) {
    return { ...store, listening: true };
  }
  return store;
}
