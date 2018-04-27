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
