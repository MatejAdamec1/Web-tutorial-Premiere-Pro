window.findLesson = function (id) {
  return window.LESSONS.find(l => l.id === id) || window.LESSONS[0];
};

window.getLessonIndex = function (id) {
  return window.LESSONS.findIndex(l => l.id === id);
};

window.getPrevNextLessons = function (id) {
  const index = window.getLessonIndex(id);
  return {
    prev: index > 0 ? window.LESSONS[index - 1] : null,
    next: index < window.LESSONS.length - 1 ? window.LESSONS[index + 1] : null
  };
};
