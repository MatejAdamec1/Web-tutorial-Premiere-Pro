window.LessonView = {
  tocItems: [],
  lastLessonId: null,
  activeTocId: null,
  scrollHandler: null,
  isEntering: false,
  enterTimer: null,

  startEnterAnimation() {
    clearTimeout(this.enterTimer);
    this.isEntering = true;

    this.enterTimer = setTimeout(() => {
      this.isEntering = false;
      m.redraw();
    }, 220);
  },

  updateActiveHeading() {
    const main = document.getElementById("main");
    const article = document.querySelector("article.content");
    if (!main || !article) return;

    const headings = Array.from(
      article.querySelectorAll("h2[id], h3[id], div.quiz_title[id]")
    );

    if (!headings.length) return;

    const mainRect = main.getBoundingClientRect();
    const offset = 120;

    let current = headings[0];

    for (const heading of headings) {
      const rect = heading.getBoundingClientRect();
      if (rect.top - mainRect.top <= offset) {
        current = heading;
      } else {
        break;
      }
    }

    if (this.activeTocId !== current.id) {
      this.activeTocId = current.id;
      m.redraw();
    }
  },

  bindScrollTracking() {
    const main = document.getElementById("main");
    if (!main) return;

    if (this.scrollHandler) {
      main.removeEventListener("scroll", this.scrollHandler);
    }

    this.scrollHandler = () => this.updateActiveHeading();
    main.addEventListener("scroll", this.scrollHandler, { passive: true });

    this.updateActiveHeading();
  },

  unbindScrollTracking() {
    const main = document.getElementById("main");
    if (main && this.scrollHandler) {
      main.removeEventListener("scroll", this.scrollHandler);
    }
    this.scrollHandler = null;
  },

  onremove() {
    this.unbindScrollTracking();
    clearTimeout(this.enterTimer);
  },

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
      }

      this.bindScrollTracking();
      this.updateActiveHeading();
    };

    if (this.lastLessonId !== lesson.id) {
      const hadPreviousLesson = this.lastLessonId !== null;

      this.lastLessonId = lesson.id;
      this.activeTocId = null;

      const main = document.getElementById("main");
      if (main) main.scrollTop = 0;

      if (hadPreviousLesson) {
        this.startEnterAnimation();
      }
    }

    return m(window.Layout, {
      lessonId: lesson.id,
      title: lesson.title,
      subtitle: lesson.subtitle,
      tocItems: this.tocItems,
      activeTocId: this.activeTocId,
      hasAI: lesson.hasAI
    }, [
      m("article.content"+ (this.isEntering ? ".content--enter" : ""), {
        oncreate: (v) => updateToc(v.dom),
        onupdate: (v) => updateToc(v.dom)
      }, [
        m.trust(lesson.html),

        quiz
          ? [m(window.QuizModule, { key: lesson.id, questions: quiz, title: lesson.title })]
          : null,

        m(".lesson_nav", [
          prev
            ? m("a.lesson_navBtn.prev", { href: "#!/" + prev.id, oncreate: m.route.link }, `← ${prev.menu}`)
            : null,
          next
            ? m("a.lesson_navBtn.next", { href: "#!/" + next.id, oncreate: m.route.link }, `${next.menu} →`)
            : null
        ]),

        lesson.sources && lesson.sources.length
          ? m(".lesson_sources", [
              m("h3", { id: "zdroje" }, "Zdroje"),
              m("ul",
                lesson.sources.map((source) =>
                  m("li",
                    source.url
                      ? m("a", {
                          href: source.url,
                          target: "_blank",
                          rel: "noopener noreferrer"
                        }, source.text)
                      : m("span", source.text)
                  )
                )
              )
            ])
          : null
      ])
    ]);
  }
};