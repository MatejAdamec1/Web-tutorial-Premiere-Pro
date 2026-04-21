(function initTheme() {
  const saved = localStorage.getItem("theme");

  let theme;
  if (saved === "dark" || saved === "light") {
    theme = saved;
  } else {
    theme = window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
  }

  document.documentElement.setAttribute("data-theme", theme);
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
