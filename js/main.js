// main.js
// Ponto de entrada da aplicação. Importa cada módulo e inicializa
// tudo quando o DOM estiver pronto. Comportamentos pequenos que
// não justificam um arquivo próprio (botões magnéticos,
// filtro de projetos, accordion) ficam aqui mesmo.

import { initTheme } from "./theme.js";
import { initNav } from "./nav.js";
import { initRevel } from "./revel.js";
import { initForm } from "./form.js";

function initMagneticButtons() {
  document.querySelectorAll(".pill-btn, .btn-light").forEach((btn) => {
    btn.addEventListener("mousemove", (e) => {
      const rect = btn.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      btn.style.transform = `translate(${x * 0.25}px, ${y * 0.35}px)`;
    });
    btn.addEventListener("mouseleave", () => {
      btn.style.transform = "";
    });
  });
}

function initProjectFilter() {
  const filterTabs = document.querySelectorAll(".filter-tab");
  const projectCards = document.querySelectorAll(".proj-card");

  filterTabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      filterTabs.forEach((t) => t.classList.remove("active"));
      tab.classList.add("active");

      const category = tab.dataset.filter;
      projectCards.forEach((card) => {
        card.hidden = !(
          category === "all" || card.dataset.category === category
        );
      });
    });
  });
}

function initAccordion() {
  document.querySelectorAll(".phase-head").forEach((head) => {
    head.addEventListener("click", () => {
      head.parentElement.classList.toggle("open");
    });
  });
}

document.addEventListener("DOMContentLoaded", () => {
  initTheme();
  initNav();
  initRevel();
  initForm();
  initMagneticButtons();
  initProjectFilter();
  initAccordion();
});
