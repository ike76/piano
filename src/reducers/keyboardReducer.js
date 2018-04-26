import * as actions from "../actions";
import Synth from "../js/audiosynth";
const piano = Synth.createInstrument("piano");

const initialState = {
  playedKeys: [],
  keyColor: {},
  questionDots: [],
  answerDots: [],
  listening: false
};

function playNote(keyName) {
  let octave = Number(keyName.split("").pop());
  let note = keyName.slice(0, -1);
  piano.play(note, octave + 2, 2);
}
export default function keyboardReducer(store = initialState, action) {
  if (action.type === actions.SHOW_QUESTION) {
    //questionNotes
    const newStore = { ...store };
    newStore.questionDots = action.questionNotes.map(notes => notes.note);
    //TODO conditional for if it is to be shown or not which would be in this obj
    return newStore;
  }
  if (action.type === actions.LISTEN) {
    return { ...store, listening: true };
  }
  if (action.type === actions.USER_CLICKED_KEY) {
    playNote(action.keyName);
    if (store.listening)
      return { ...store, answerDots: [...store.answerDots, action.keyName] };
  }
  if (action.type === actions.MAC_CLICKED_KEY) {
    playNote(action.keyName);
  }
  if (action.type === actions.RESET_KEYBOARD) {
    return { ...store, questionDots: [], answerDots: [] };
  }
  return store;
}
