import { projects } from "./projects.js";

const projectsContainer = document.querySelector(".projects__container");
const menuButton = document.querySelector(".menu-btn");
const menuButtonBurger = document.querySelector(".menu-btn__burger");
const menu = document.querySelector(".menu-nav");
const navItems = document.querySelectorAll(".menu-nav__link");

menuButton.addEventListener("click", () => {
  menu.classList.toggle("open");
  menuButtonBurger.classList.toggle("open");
});

projectsContainer.innerHTML = projects
  .map((project) => {
    return `
        <div class="project">
            <img src="./images/projects/${project.name}.png"
              alt="project__image"/>
            <article class="project__article">
              <h2 class="project__name">${project.name}</h2>
              <p class="project__text">
                ${project.article}
              </p>
              <p>
                <a class="project__page-link" 
                href="${project.linkPage}" target="_blank">
                ${project.name}</a>
              </p>
              <p>
                <a class="project__repo-link"
                  href="${project.linkGithub}" target="_blank">
                  The GitHub repository</a>
              </p>
            </article>
          </div>`;
  })
  .join("");

for (const item of navItems) {
  item.addEventListener("click", () => {
    menuButton.classList.remove("open");
    menuButtonBurger.classList.remove("open");
    menu.classList.remove("open");
  });
}
