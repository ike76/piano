export const SHOW_QUESTION = "SHOW_QUESTION";
export const showQuestion = questionNotes => ({
  type: SHOW_QUESTION,
  questionNotes
});
export const LISTEN = "LISTEN";
export const listen = {
  type: LISTEN
};

export const USER_CLICKED_KEY = "USER_CLICKED_KEY";
export const userClickedKey = keyName => ({
  type: USER_CLICKED_KEY,
  keyName
});

export const MAC_CLICKED_KEY = "MAC_CLICKED_KEY";
export const macClickedKey = keyName => ({
  type: MAC_CLICKED_KEY,
  keyName
});

export const SET_CORRECT_ANSWER = "SET_CORRECT_ANSWER";
export const setCorrectAnswer = correctAnswer => ({
  type: SET_CORRECT_ANSWER,
  correctAnswer
});

export const RESET_KEYBOARD = "RESET_KEYBOARD";
export const resetKeyboard = {
  type: RESET_KEYBOARD
};
