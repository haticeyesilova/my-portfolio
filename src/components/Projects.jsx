import React from 'react';
import projects from './projectsData'
import './Projects.css';

const Projects = () => {
  return (
    <section id="projects" className="projects-container">
      <h2>My Projects</h2>
      <div className="projects-grid">
        {projects.map((project) => (
          <div className="project-card" key={project.id}>
            <div className="project-placeholder">
              {project.title.charAt(0)}
            </div>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              View on GitHub
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
