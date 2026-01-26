import { memo } from "react";

import { projects } from "../data";
import { getPath } from "../utils";

import "../styles/projects.css";

interface Project {
  title: string;
  description: string;
  image: string;
  link: string;
}

const Projects: React.FC = () => {
  return (
    <div className="projects-container">

      {/* Header */}
      <header className="projects-header">
        <h2>Featured Projects</h2>
        <p>Some things I’ve built recently</p>
      </header>

      {/* Grid */}
      <div className="projects-grid">
        {projects.map((project: Project) => (
          <a
            key={project.link}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`View ${project.title}`}
            className="project-card"
          >

            {/* Image */}
            <div className="project-image-wrapper">
              <img
                src={getPath(project.image)}
                alt={project.title}
                loading="lazy"
              />
            </div>

            {/* Content */}
            <div className="project-content">
              <h3>{project.title}</h3>
              <p>{project.description}</p>

              <span className="project-link">
                View Project
              </span>
            </div>

          </a>
        ))}
      </div>

    </div>
  );
};

export default memo(Projects);
