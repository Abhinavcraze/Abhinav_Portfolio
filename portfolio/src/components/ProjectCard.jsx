// src/components/ProjectCard.js
import React from 'react';
import { FaExternalLinkAlt } from 'react-icons/fa';

const ProjectCard = ({ project }) => {
    return (
        <div className="project-card">
            <h3>{project.title}</h3>
            <p className="tech-stack">Stack: {project.stack}</p>
            <ul>
                {/* Renders the bold action verbs (**Engineered**) defined in data.js */}
                {project.description.map((point, index) => (
                    <li key={index} dangerouslySetInnerHTML={{ __html: point }} />
                ))}
            </ul>
            <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link">
                View Code <FaExternalLinkAlt />
            </a>
        </div>
    );
};

export default ProjectCard;