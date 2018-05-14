export const SET_CHAPTER = "SET_CHAPTER";
export const setChapter = chapterNumber => ({
  type: SET_CHAPTER,
  chapterNumber
});
export const SET_LESSON = "SET_LESSON";
export const setLesson = lessonNumber => ({
  type: SET_LESSON,
  lessonNumber
});
export const SET_QUESTION = "SET_QUESTION";
export const setQuestion = questionNumber => ({
  type: SET_QUESTION,
  questionNumber
});

export const PASS_TEST = "PASS_TEST";
export const passTest = (chapterName, testName) => ({
  type: PASS_TEST,
  chapterName,
  testName
});

export const SET_NAV_LIST = "SET_NAV_LIST";
export const setNavList = navList => ({
  type: SET_NAV_LIST,
  navList
});

export const OPEN_NAV = "OPEN_NAV";
export const openNav = () => ({
  type: OPEN_NAV
});
export const CLOSE_NAV = "CLOSE_NAV";
export const closeNav = () => ({
  type: CLOSE_NAV
});
