window.LessonView = {
  tocItems: [],
  lastLessonId: null,

  view(vnode) {
    const lesson = vnode.attrs.lesson;
    const { prev, next } = window.getPrevNextLessons(lesson.id);
    const quiz = lesson.quizKey && window.QUIZZES ? window.QUIZZES[lesson.quizKey] : null;

    const updateToc = (articleDom) => {
      const newToc = window.buildTOCFromContent(articleDom);

      const same =
        newToc.length === this.tocItems.length &&
        newToc.every((x, i) => this.tocItems[i] && this.tocItems[i].id === x.id);

      if (!same) {
        this.tocItems = newToc;
        m.redraw();
      }
    };

    if (this.lastLessonId !== lesson.id) {
      this.lastLessonId = lesson.id;
      const main = document.getElementById("main");
      if (main) main.scrollTop = 0;
    }

    return m(window.Layout, {
      lessonId: lesson.id,
      title: lesson.title,
      subtitle: lesson.subtitle,
      tocItems: this.tocItems
    }, [
      m("article.content", {
        oncreate: (v) => updateToc(v.dom),
        onupdate: (v) => updateToc(v.dom)
      }, [
        m.trust(lesson.html),

        quiz ? [m(window.QuizModule, { key: lesson.id, questions: quiz , title: lesson.title})] : null,

        m(".lesson_nav", [
          prev
            ? m("a.lesson_navBtn.prev", { href: "#!/" + prev.id, oncreate: m.route.link }, `← ${prev.menu}`)
            : null,
          next
            ? m("a.lesson_navBtn.next", { href: "#!/" + next.id, oncreate: m.route.link }, `${next.menu} →`)
            : null
        ])
      ])
    ]);
  }
};
