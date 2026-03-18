m.route(document.getElementById("app"), "/uvod", {
  "/:id": {
    render: (vnode) => {
      const lesson = window.findLesson(vnode.attrs.id);
      return m(window.LessonView, { lesson });
    }
  }
});