
export function initFormValidation() {
  const form = document.querySelector("form");
  if (!form) return;

  form.addEventListener("submit", e => {
    let valid = true;

    form.querySelectorAll("[required]").forEach(field => {
      if (!field.value.trim()) {
        valid = false;
        field.classList.add("error");
        if (field.nextElementSibling)
          field.nextElementSibling.textContent = "Campo obrigatório!";
      } else {
        field.classList.remove("error");
        if (field.nextElementSibling)
          field.nextElementSibling.textContent = "";
      }
    });

    if (!valid) {
      e.preventDefault();
      alert("Por favor, preencha os campos obrigatórios.");
    }
  });
}
