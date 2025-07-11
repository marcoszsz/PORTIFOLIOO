const projects = [
    {
      id: "cieges",
      name: "Portal CIEGES",
      description: "Dashboard de saúde pública com gráficos interativos.",
      repo: "https://github.com/marcoszsz/Cieges",
      demo: "https://cieges-es.vercel.app/cieges.html",
      tech: ["HTML", "CSS", "JS", "Chart.js"],
    },
    {
      id: "info-saude",
      name: "Info-Saúde",
      description: "Dashboard de saúde pública com gráficos interativos.",
      repo: "https://github.com/marcoszsz/Info-Saude",
      demo: "",
      tech: ["Typescript", "LocalStorage", "Html", "CSS"],
    },
  ];
  
  /* ===== Renderizar cards de projeto ===== */
  const projectList = document.getElementById("project-list");
  
  projects.forEach((p) => {
    const card = document.createElement("article");
    card.className = "card";
    card.innerHTML = `
      <div>
        <h3>${p.name}</h3>
        <p>${p.description}</p>
        <div class="tags">
          ${p.tech.map((t) => `<span class="tag">${t}</span>`).join("")}
        </div>
      </div>
      <div>
        <a href="${p.repo}" target="_blank">Código</a>
        ${p.demo ? ` | <a href="${p.demo}" target="_blank">Demo</a>` : ""}
      </div>
    `;
    projectList.appendChild(card);
  });
  
  /* ===== Ano automático no footer ===== */
  document.getElementById("year").textContent = new Date().getFullYear();
  
  /* ===== Menu mobile ===== */
  const btnMobile = document.getElementById("btn-mobile");
  btnMobile.addEventListener("click", () => {
    const nav = document.getElementById("menu");
    nav.classList.toggle("active");
    const expanded = btnMobile.getAttribute("aria-expanded") === "true" || false;
    btnMobile.setAttribute("aria-expanded", !expanded);
  });
  
  /* ===== Dark mode persistente ===== */
  const darkToggle = document.getElementById("dark-toggle");
  const userPrefers = localStorage.getItem("theme");
  if (userPrefers === "dark") document.documentElement.dataset.theme = "dark";
  
  darkToggle.addEventListener("click", () => {
    const isDark = document.documentElement.dataset.theme === "dark";
    document.documentElement.dataset.theme = isDark ? "" : "dark";
    localStorage.setItem("theme", isDark ? "light" : "dark");
  });
  