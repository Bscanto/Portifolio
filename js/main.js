// main.js
// Ponto de entrada da aplicação. Importa cada módulo e inicializa
// tudo quando o DOM estiver pronto. Comportamentos pequenos que
// não justificam um arquivo próprio (cursor, botões magnéticos,
// filtro de projetos, accordion) ficam aqui mesmo.

import { initTheme } from "./theme.js";
import { initNav } from "./nav.js";
import { initRevel } from "./revel.js";
import { initForm } from "./form.js";

function initCursor() {
  const cursorDot = document.querySelector(".cursor-dot");
  const cursorRing = document.querySelector(".cursor-ring");
  if (!cursorDot || !cursorRing) return;
  if (!matchMedia("(hover: hover) and (pointer: fine)").matches) return;

  window.addEventListener("mousemove", (e) => {
    cursorDot.style.left = `${e.clientX}px`;
    cursorDot.style.top = `${e.clientY}px`;
    cursorRing.style.left = `${e.clientX}px`;
    cursorRing.style.top = `${e.clientY}px`;
  });

  document.querySelectorAll("a, button, .proj-card").forEach((el) => {
    el.addEventListener("mouseenter", () => cursorRing.classList.add("hover"));
    el.addEventListener("mouseleave", () =>
      cursorRing.classList.remove("hover"),
    );
  });
}

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
  initCursor();
  initMagneticButtons();
  initProjectFilter();
  initAccordion();
});
