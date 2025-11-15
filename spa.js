
export function initSPA() {
  const links = document.querySelectorAll("[data-route]");
  const view = document.getElementById("app-view");

  async function loadPage(page) {
    const res = await fetch(page);
    const html = await res.text();
    view.innerHTML = html;
  }

  links.forEach(link => {
    link.addEventListener("click", e => {
      e.preventDefault();
      const page = link.getAttribute("data-route");
      loadPage(page);
    });
  });
}
