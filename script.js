
const projects = [
    {
        title: "Personal Portfolio",
        description: "A personal portfolio website showcasing my profile, technical skills, achievements and projects.",
        icon: "👩‍💻",
        image: "assets/image/portfolio.jpg",
        category: "Web Development",
        technologies: ["HTML", "CSS", "JavaScript"],
        liveUrl: "https://poovizhi-portfolio-nine.vercel.app/",
        githubUrl: "https://github.com/PoovizhiRajamanickam/TX.portfolio"
    },
    {
        title: "To-Do List Application",
        description: "An interactive task management application to add, complete and organize daily tasks.",
        icon: "📝",
        image: "assets/image/to-do.jpg",
        category: "JavaScript Application",
        technologies: ["HTML", "CSS", "JavaScript"],
        liveUrl: "https://txtodo-list.vercel.app/",
        githubUrl: "https://github.com/PoovizhiRajamanickam/TX.todo-list"
    },
    {
        title: "Weather Dashboard",
        description: "A weather dashboard that displays weather information using a weather API.",
        icon: "🌤️",
        image: "assets/image/weather.jpg",
        category: "API Integration",
        technologies: ["HTML", "CSS", "JavaScript", "API"],
        liveUrl: "https://txweather-dashboard.vercel.app/",
        githubUrl: "https://github.com/PoovizhiRajamanickam/TX.weather-dashboard"
    }
];

const projectsGrid = document.getElementById("projectsGrid");
const emptyMessage = document.getElementById("emptyMessage");

function createProjectCard(project) {
    const card = document.createElement("article");
    card.className = "project-card";

    const image = document.createElement("img");
    image.className = "project-image";
    image.src = project.image;
    image.alt = project.title + " project screenshot";
    image.loading = "lazy";

    image.onerror = function () {
        image.style.display = "none";
    };

    const icon = document.createElement("div");
    icon.className = "project-icon";
    icon.textContent = project.icon;

    const title = document.createElement("h3");
    title.textContent = project.title;

    const description = document.createElement("p");
    description.textContent = project.description;

    const tags = document.createElement("div");
    tags.className = "project-tags";

    project.technologies.forEach(technology => {
        const tag = document.createElement("span");
        tag.textContent = technology;
        tags.appendChild(tag);
    });

    const links = document.createElement("div");
    links.className = "project-links";

    function createLink(label, url) {
        const link = document.createElement("a");
        link.textContent = label;
        link.href = url;
        link.target = "_blank";
        link.rel = "noopener noreferrer";
        return link;
    }

    links.appendChild(
        createLink("Live Demo ↗", project.liveUrl)
    );

    links.appendChild(
        createLink("GitHub ↗", project.githubUrl)
    );

    card.append(
        image,
        icon,
        title,
        description,
        tags,
        links
    );

    return card;
}

function displayProjects(projectList) {
    projectsGrid.replaceChildren();

    emptyMessage.hidden = projectList.length !== 0;

    projectList.forEach(project => {
        const projectCard = createProjectCard(project);
        projectsGrid.appendChild(projectCard);
    });
}

displayProjects(projects);

const projectSearch = document.getElementById("projectSearch");

projectSearch.addEventListener("input", function () {
    const searchText = this.value.toLowerCase().trim();

    const filteredProjects = projects.filter(project => {
        const searchableContent = [
            project.title,
            project.description,
            project.category,
            ...project.technologies
        ].join(" ").toLowerCase();

        return searchableContent.includes(searchText);
    });

    displayProjects(filteredProjects);
});

const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", function () {
    const isOpen = navLinks.classList.toggle("active");

    menuToggle.setAttribute("aria-expanded", String(isOpen));
    menuToggle.textContent = isOpen ? "✕" : "☰";
});

navLinks.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", function () {
        navLinks.classList.remove("active");
        menuToggle.setAttribute("aria-expanded", "false");
        menuToggle.textContent = "☰";
    });
});

const themeToggle = document.getElementById("themeToggle");

themeToggle.addEventListener("click", function () {
    document.body.classList.toggle("light-theme");

    const isLight = document.body.classList.contains("light-theme");

    themeToggle.textContent = isLight ? "☾" : "☀";
});

document.getElementById("currentYear").textContent =
    new Date().getFullYear();
