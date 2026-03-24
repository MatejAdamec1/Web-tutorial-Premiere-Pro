window.buildTOCFromContent = function (rootEl) {
  const toc = [];

  const headings = rootEl.querySelectorAll("h2, h3");

  headings.forEach(h => {
    if (h.closest(".lesson_sources")) return;

    toc.push({ id: h.id, text: h.textContent, level: h.tagName });
  });

  const qtitle = rootEl.querySelector("div.quiz_title");
  if (qtitle) {
    toc.push({ id: qtitle.id, text: "Kvíz", level: "H2" });
  }

  return toc;
};