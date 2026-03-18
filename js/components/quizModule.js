
window.QuizModule = {
  oninit(vnode) {
    this.questions = vnode.attrs.questions || [];
    this.i = 0;
    this.selected = null;
    this.checked = false;
    this.correctCount = 0;
    this.finished = false;
    this.qtitle = "Kvíz: " + vnode.attrs.title;
  },

  pickAnswer(aIndex) {
    if (this.checked || this.finished) return;
    this.selected = aIndex;
  },

  primaryAction() {
    if (this.finished) return;

    const q = this.questions[this.i];
    if (!q) return;

    if (!this.checked) {
      if (this.selected === null) return;

      this.checked = true;

      if (this.selected === q.correctIndex) {
        this.correctCount++;
      }
      return;
    }

    const nextIndex = this.i + 1;
    console.log(nextIndex, this.questions.length);
    if (nextIndex >= this.questions.length) {
      this.finished = true;
      return;
    }

    this.i = nextIndex;
    this.selected = null;
    this.checked = false;
  },

  reset() {
    this.i = 0;
    this.selected = null;
    this.checked = false;
    this.correctCount = 0;
    this.finished = false;
  },

  getButtonText() {
    if (this.finished) return "Zkusit znovu";
    if (!this.checked) return "Zkontrolovat";
    return "Další";
  },

  view() {
    if (!this.questions.length) return null;

    const total = this.questions.length;
    const answered = this.i + (this.checked ? 1 : 0);
    const progress = Math.round((answered / total) * 100);

    if (this.finished) {
      return m("section.quiz_card", [
        m(".quiz_header", [
          m("div.quiz_title", {id: "Kviz"}, this.qtitle),
          m("div.quiz_meta", `Správně: ${this.correctCount}/${this.questions.length}`)
        ]),
        m("p.quiz_done", "Hotovo. Pro procvičení je možné kvíz spustit znovu."),
        m(".quiz_footer", [
        m(".quiz_progress", [
            m(".quiz_progressTop", [
                m("span.quiz_progressLabel", "Postup"),
            ]),
            m(".quiz_progressBar", [
                m(".quiz_progressFill", { style: { width: progress + "%" } })
            ])
        ]),
          m("button.quiz_btn", { onclick: () => this.reset() }, this.getButtonText())
        ])
      ]);
    }

    const q = this.questions[this.i];
    const isCorrect = this.selected === q.correctIndex;

    return m("section.quiz_card", [
      m(".quiz_header", [
        m("div.quiz_title", {id: "Kviz"}, this.qtitle),
        m("div.quiz_meta", `Otázka: ${this.i + 1}/${this.questions.length}`)
      ]),

      m("div.quiz_body", [
        m("p.quiz_question", q.question),

        m("div.quiz_answers",
          q.answers.map((a, ai) => {
            const checked = this.selected === ai;

            let cls = "quiz_answer";
            if (this.checked) {
              if (ai === q.correctIndex) cls += " correct";
              else if (checked && ai !== q.correctIndex) cls += " wrong";
            } else if (checked) {
              cls += " selected";
            }

            return m("label", { class: cls }, [
              m("input[type=radio]", {
                name: "q",
                checked,
                onclick: () => this.pickAnswer(ai)
              }),
              m("span", a)
            ]);
          })
        )
      ]),

      m(".quiz_footer", [
        m(".quiz_progress", [
            m(".quiz_progressTop", [
                m("span.quiz_progressLabel", "Postup"),
            ]),
            m(".quiz_progressBar", [
                m(".quiz_progressFill", { style: { width: progress + "%" } })
            ])
        ]),

        m("button.quiz_btn", {
            onclick: () => this.primaryAction(),
            disabled: (!this.checked && this.selected === null)
        }, this.getButtonText())
        ])
    ]);
  }
};
