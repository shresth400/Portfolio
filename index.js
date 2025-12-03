document.querySelectorAll(".sidebar nav ul li a").forEach((item) => {
  item.addEventListener("click", () => {
    document
      .querySelectorAll(".sidebar nav ul li a")
      .forEach((li) => li.classList.remove("active"));
    item.classList.add("active");
  });
});

function getProjects() {
  const container = document.querySelector(".projects-section");
  const projectsContainer = document.createElement("div");

  container.appendChild(projectsContainer);
  projectsContainer.classList.add("projects-container");

  function randomColour() {
    const range = "0123456789abcdef";
    let randomColor = "#";
    for (let i = 0; i < 6; i++) {
      let random = Math.floor(Math.random() * range.length);
      randomColor += range[random];
    }
    return randomColor;
  }

  for (let i = 0; i < 10; i++) {
    const projects = document.createElement("div");
    projectsContainer.appendChild(projects);
    projects.classList.add("projects");
    projects.style.backgroundColor = randomColour();
  }
}

window.onload = getProjects;
