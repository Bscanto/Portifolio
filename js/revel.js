// revel.js
// Animações de entrada ao rolar a página ("reveal") e os
// contadores numéricos animados da faixa de estatísticas.

export function initReveal() {
  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("in");
          revealObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 },
  );

  document
    .querySelectorAll("[data-reveal]")
    .forEach((el) => revealObserver.observe(el));
}

export function initCounters() {
  const statObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;

        const el = entry.target;
        const target = parseInt(el.dataset.count, 10);
        const suffix = el.dataset.suffix || "";
        const step = Math.max(1, Math.round(target / 36));
        let current = 0;

        const tick = () => {
          current += step;
          if (current >= target) {
            el.textContent = target + suffix;
            return;
          }
          el.textContent = current + suffix;
          requestAnimationFrame(tick);
        };

        tick();
        statObserver.unobserve(el);
      });
    },
    { threshold: 0.5 },
  );

  document
    .querySelectorAll(".stat .num[data-count]")
    .forEach((el) => statObserver.observe(el));
}

export function initRevel() {
  initReveal();
  initCounters();
}
