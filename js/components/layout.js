window.Layout = {
  view(vnode) {
    const currentLessonId = vnode.attrs.lessonId;

    return m(".layout", [
      m("aside.sidebar", [
        m(".sidebar_header", [
          m(".sidebar_toptext", "Tutoriál"),
          m(".sidebar_title", "Adobe Premiere Pro"),
        ]),
        m("nav.sidebar_nav",
          window.LESSONS.map(lesson =>
            m("a.nav_item", {
              href: `#!/` + lesson.id,
              oncreate: m.route.link,
              class: lesson.id === currentLessonId ? "active" : ""
            }, lesson.menu)
          )
        ),
      ]),

      m("main.main", { id: "main" }, [
        m("header.topbar", [
          m("h1", vnode.attrs.title),
          m("p.subtitle", vnode.attrs.subtitle),
        ]),
        vnode.children
      ]),

      m("aside.toc", [
        m(".toc_title", "V této kapitole"),
        m("nav.toc_nav",
          vnode.attrs.tocItems.map(item =>
            m("a", {
              href: `#${item.id}`,
              onclick: (e) => {
                e.preventDefault();
                const el = document.getElementById(item.id);
                if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
              },
              class: item.level === "H3" ? "toc_title-h3" : "toc_title-h2"
            }, item.text)
          )
        ),
        m(".toc_footer", [
          m("button.theme_btn", { onclick: window.toggleTheme }, window.themeLabel())
        ])
      ])
    ]);
  }
};
