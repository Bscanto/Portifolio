// nav.js
// Tudo relacionado à navegação: menu mobile, item ativo no índice
// lateral, efeito de "scramble" no hover do menu e o botão de
// voltar ao topo.

export function initMobileMenu() {
  const burgerBtn = document.getElementById("burgerBtn");
  const closeMenuBtn = document.getElementById("closeMenuBtn");
  const mobileMenu = document.getElementById("mobileMenu");
  if (!burgerBtn || !mobileMenu) return;

  burgerBtn.addEventListener("click", () => mobileMenu.classList.add("open"));
  closeMenuBtn.addEventListener("click", () =>
    mobileMenu.classList.remove("open"),
  );
  mobileMenu.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => mobileMenu.classList.remove("open"));
  });
}

export function initSideIndex() {
  const sectionIds = ["sobre", "faco", "trajetoria", "projetos", "contato"];
  const sideLinks = document.querySelectorAll("#sideIndex a");
  if (!sideLinks.length) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        sideLinks.forEach((link) => link.classList.remove("active"));
        const activeLink = document.querySelector(
          `#sideIndex a[data-target="${entry.target.id}"]`,
        );
        if (activeLink) activeLink.classList.add("active");
      });
    },
    { rootMargin: "-45% 0px -50% 0px" },
  );

  sectionIds.forEach((id) => {
    const section = document.getElementById(id);
    if (section) observer.observe(section);
  });
}

export function initScrambleNav() {
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  document.querySelectorAll("nav.links a").forEach((link) => {
    const original = link.textContent;
    let interval;

    link.addEventListener("mouseenter", () => {
      let iteration = 0;
      clearInterval(interval);

      interval = setInterval(() => {
        link.textContent = original
          .split("")
          .map((letter, index) => {
            if (letter === " ") return " ";
            if (index < iteration) return original[index];
            return chars[Math.floor(Math.random() * chars.length)];
          })
          .join("");

        if (iteration >= original.length) clearInterval(interval);
        iteration += 1 / 2;
      }, 28);
    });
  });
}

export function initBackToTop() {
  const toTopBtn = document.getElementById("toTopBtn");
  if (!toTopBtn) return;

  window.addEventListener("scroll", () => {
    toTopBtn.classList.toggle("show", window.scrollY > 600);
  });

  toTopBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}

export function initNav() {
  initMobileMenu();
  initSideIndex();
  initScrambleNav();
  initBackToTop();
}
