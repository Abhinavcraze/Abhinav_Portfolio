// src/components/Education.js
import React from 'react';

const Education = ({ education }) => {
    return (
        <section id="education" className="section education">
            <div className="container">
                <h2>Education</h2>
                <div className="timeline">
                    {education.map((item, index) => (
                        <div 
                            key={index} 
                            className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}
                        >
                            <span className="timeline-date">{item.year}</span>
                            <div className="timeline-content">
                                <h4>{item.degree}</h4>
                                <p className="institution">{item.institution}</p>
                                <p className="details">{item.details}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Education;