import * as actions from "../actions";
import chapters from "../chapters";

// const chapterLength = chapters.length;

const initialState = {
  navOpen: false,
  navList: {},
  currentChapterIndex: 0,
  currentLessonIndex: 0,
  currentQuestion: 0
};

// local storage should move
const setLocalStorage = navList => {
  localStorage.setItem("navList", JSON.stringify(navList));
};
const getLocalStorage = () => {
  return JSON.parse(localStorage.getItem("navList"));
};

export default function allReducer(state = initialState, action) {
  if (action.type === actions.PASS_TEST) {
    const newState = { ...state };
    const updatedChapter = {
      ...state.navList[action.chapterName],
      [action.testName]: "passed"
    };
    newState.navList = {
      ...state.navList,
      [action.chapterName]: updatedChapter
    };
    setLocalStorage(newState.navList);
    return newState;
  }
  if (action.type === actions.SET_NAV_LIST) {
    // TODO this logic moves to navigation
    return { ...state, navList: action.navList };
  }
  if (action.type === actions.OPEN_NAV) {
    return { ...state, navOpen: true };
  }
  if (action.type === actions.CLOSE_NAV) {
    return { ...state, navOpen: false };
  }

  return state;
  // }
}
