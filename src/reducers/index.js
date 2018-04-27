import * as actions from "../actions";
import { chapters } from "../chapters";

const chapterLength = chapters.length;

const initialState = {
  currentChapter: 0,
  currentLesson: 0,
  currentQuestion: 0
};

export default function allReducer(store = initialState, action) {
  switch (action.type) {
    case actions.SET_CHAPTER:
      if (action.chapterNumber < chapterLength && action.chapterNumber >= 0) {
        return { ...store, currentChapter: action.chapterNumber };
      } else return store;
    case actions.SET_LESSON:
      return { ...store, currentLesson: action.lessonNumber };
    case actions.SET_QUESTION:
      return { ...store, currentQuestion: action.questionNumber };

    default:
      return store;
  }
}
