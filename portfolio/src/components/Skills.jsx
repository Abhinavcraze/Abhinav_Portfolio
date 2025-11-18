// src/components/Skills.js

import React from 'react';

const Skills = ({ skills }) => {
    return (
        <section id="skills" className="section skills">
            <div className="container">
                <h2>Technical Toolkit & Skills</h2>
                
                {Object.entries(skills).map(([category, skillList]) => (
                    <div key={category} className="skill-category-block">
                        <h3 className="category-title">{category.toUpperCase().replace('_', ' ')}</h3>
                        <div className="skills-grid">
                            {skillList.map((skill, index) => (
                                <span key={index} className="skill-tag">
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Skills;