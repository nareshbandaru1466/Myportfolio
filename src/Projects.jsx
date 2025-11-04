import React from "react";

const projectsData = [
  {
    id: 1,
    title: "Project Title One",
    description:
      "A brief description of Project One. Mention technologies used and its purpose.",
    image: "https://via.placeholder.com/300x200",
    link: "#",
  },
  {
    id: 2,
    title: "Project Title Two",
    description:
      "A brief description of Project Two. Mention technologies used and its purpose.",
    image: "https://via.placeholder.com/300x200",
    link: "#",
  },
  {
    id: 3,
    title: "Project Title Three",
    description:
      "A brief description of Project Three. Mention technologies used and its purpose.",
    image: "https://via.placeholder.com/300x200",
    link: "#",
  },
];

const Projects = () => (
  <section id="projects" className="projects-section">
    <div className="container">
      <h2>My Projects</h2>
      <div className="project-grid">
        {projectsData.map((project) => (
          <div key={project.id} className="project-card">
            <img src={project.image} alt={project.title} />
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link">
              View Project
            </a>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Projects;
