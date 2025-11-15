
export function templateProjectCard(project) {
  return `
    <div class="card">
      <h3>${project.title}</h3>
      <p>${project.desc}</p>
      <button class="btn">Saiba mais</button>
    </div>
  `;
}
