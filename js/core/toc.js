window.buildTOCFromContent = function (rootEl) {
  const toc = [];
  const headings = rootEl.querySelectorAll("h2, h3");
  headings.forEach(h => toc.push({ id: h.id, text: h.textContent }));
  const qtitle = rootEl.querySelector("div.quiz_title");
  if (qtitle) {
    toc.push({ id: qtitle.id, text: "Kvíz" });
  }
  return toc;
};
