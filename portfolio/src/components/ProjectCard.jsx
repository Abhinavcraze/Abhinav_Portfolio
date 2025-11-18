// src/components/ProjectCard.js

import React from 'react';
import { FaExternalLinkAlt, FaHtml5, FaCss3Alt, FaJs, FaReact, FaJava, FaDatabase } from 'react-icons/fa';
import { DiCodeBadge } from 'react-icons/di';

// Helper function to map tech names to icons (keep this as is)
const getTechIcon = (tech) => {
    tech = tech.toLowerCase();
    if (tech.includes('react')) return <FaReact className="tech-icon react-icon" title="React.js" />;
    if (tech.includes('javascript')) return <FaJs className="tech-icon js-icon" title="JavaScript" />;
    if (tech.includes('html')) return <FaHtml5 className="tech-icon html-icon" title="HTML5" />;
    if (tech.includes('css')) return <FaCss3Alt className="tech-icon css-icon" title="CSS3" />;
    if (tech.includes('java')) return <FaJava className="tech-icon java-icon" title="Java" />;
    if (tech.includes('sql') || tech.includes('indexed db')) return <FaDatabase className="tech-icon db-icon" title="Database/Data Persistence" />;
    return <DiCodeBadge className="tech-icon" title={tech} />; // Default icon
};

const ProjectCard = ({ project }) => {
    const technologies = project.stack.split(',').map(t => t.trim());

    return (
        <div className="project-card">
            {/* 🎯 ADD IMAGE RENDERING HERE */}
            {project.image && (
                <div className="project-image-wrapper">
                    <img 
                        src={project.image} 
                        alt={`${project.title} Screenshot`} 
                        className="project-screenshot" 
                    />
                </div>
            )}
            
            {/* Existing content continues below the image */}
            <h3>{project.title}</h3>
            
            <div className="tech-icon-list">
                {technologies.map((tech, index) => (
                    <span key={index} className="tech-icon-wrapper" title={tech}>
                        {getTechIcon(tech)}
                    </span>
                ))}
            </div>

            <ul>
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