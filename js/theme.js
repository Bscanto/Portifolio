// theme.js
// Alterna entre tema escuro (padrão) e claro, e lembra a escolha
// do visitante entre visitas usando localStorage.

const STORAGE_KEY = "bruno-portfolio-theme";

export function initTheme() {
  const root = document.documentElement;
  const toggleBtn = document.getElementById("themeToggle");
  if (!toggleBtn) return;

  const saved = localStorage.getItem(STORAGE_KEY);
  if (saved === "light") {
    root.classList.add("light");
  }

  toggleBtn.addEventListener("click", () => {
    root.classList.toggle("light");
    const isLight = root.classList.contains("light");
    localStorage.setItem(STORAGE_KEY, isLight ? "light" : "dark");
  });
}
