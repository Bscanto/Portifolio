// form.js
// Validação do formulário de contato. Como o site é 100% estático
// (Sem backend), o envio final abre o cliente de e-mail
// Visitantes já com os dados já preenchidos.

function showStatus(statusEL, message, type) {
  statusEL.textContent = message;
  statusEL.className = `form-status ${type}`;
}

function isValidEmail(value) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

export function initForm() {
  const form = document.getElementById("contactForm");
  if (!form) return;

  const statusEl = form.querySelector(".form-status");

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const message = form.message.value.trim();

    if (!name || !email || !message) {
      showStatus(
        statusEl,
        "Preencha todos os campos antes de enviar.",
        "error",
      );
      return;
    }
    if (!isValidEmail(email)) {
      showStatus(statusEl, "Digite um e-mail válido.", "error");
      return;
    }

    const subject = encodeURIComponent(`Contato pelo portfólio — ${name}`);
    const body = encodeURIComponent(`${message}\n\n— ${name} (${email})`);
    window.location.href = `mailto:bruno_scanto@hotmail.com?subject=${subject}&body=${body}`;

    showStatus(statusEl, "Abrindo seu cliente de e-mail…", "success");
    form.reset();
  });
}
