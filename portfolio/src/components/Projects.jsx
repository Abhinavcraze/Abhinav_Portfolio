// src/components/Projects.js
import React from 'react';
import ProjectCard from './ProjectCard';

const Projects = ({ projects }) => {
    return (
        <section id="projects" className="section projects">
            <div className="container">
                <h2>Featured Projects</h2>
                <div className="projects-grid">
                    {projects.map((project, index) => (
                        <ProjectCard key={index} project={project} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;