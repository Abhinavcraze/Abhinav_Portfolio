
import React from 'react';
import { FaLinkedinIn, FaGithub } from 'react-icons/fa';

const placeholderImage = "./Abhinav.jpeg"; 

const About = ({ name, title, summary }) => {
    return (
        <section id="About" className="section About">
            <div className="container About-container">
                <div className="About-content">
                    {/* <p className="intro-text">Hello, my name is</p> */}
                    <h2>{name}</h2>
                    <p className="role">{title}</p>
                    <p className="summary-text" dangerouslySetInnerHTML={{ __html: summary }} />
                    
                </div>
                <div className="About-image">
                    {/* Replace the placeholder URL with the actual link to your professional image */}
                    <img 
                        src={placeholderImage} 
                        alt={`${name} Profile`} 
                        className="profile-pic" 
                    />
                </div>
            </div>
        </section>
    );
};

export default About;