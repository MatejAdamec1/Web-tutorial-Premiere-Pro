(function initTheme() {
  const saved = localStorage.getItem("theme");
  if (saved === "dark" || saved === "light") {
    document.documentElement.setAttribute("data-theme", saved);
  }
})();

window.themeLabel = function () {
  const t = document.documentElement.getAttribute("data-theme");
  return t === "dark" ? "Světlý režim" : "Tmavý režim";
};

window.toggleTheme = function () {
  const root = document.documentElement;
  const current = root.getAttribute("data-theme");
  const next = current === "dark" ? "light" : "dark";
  root.setAttribute("data-theme", next);
  localStorage.setItem("theme", next);
  m.redraw();
};
