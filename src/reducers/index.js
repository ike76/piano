import * as actions from "../actions";
import Synth from "../js/audiosynth";
const piano = Synth.createInstrument("piano");
const initialState = {
  playedKeys: []
};
export const mainReducer = (store = initialState, action) => {
  if (action.type === actions.ADD_KEY_TO_LIST) {
    piano.play("C#", 4, 2);
    return Object.assign({}, { playedKeys: [...store.playedKeys, action.key] });
  }
  return store;
};
