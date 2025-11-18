// src/components/Contact.js

import React from 'react';
// 1. Import the necessary social icons
import { FaEnvelope, FaPhoneAlt, FaLinkedinIn, FaGithub } from 'react-icons/fa';

const Contact = ({ contact, social }) => { 
    // The 'social' prop is now READ and used below ⬇️
    return (
        <section id="contact" className="section contact">
            <div className="container">
                <h2>Contact Me</h2>
                <p className="contact-intro">I am currently open to new opportunities and eager to connect on development work. Let's build something great!</p>
                
                <div className="contact-info-grid">
                    <p>
                        <FaEnvelope className="icon" /> 
                        <a href={`mailto:${contact.email}`}>{contact.email}</a>
                    </p>
                    <p>
                        <FaPhoneAlt className="icon" /> 
                        {contact.phone}
                    </p>
                    {/* 2. ADD SOCIAL LINKS HERE to use the 'social' prop */}
                    <p>
                        <a href={social.linkedin} target="_blank" rel="noopener noreferrer" className="contact-social-link">
                            <FaLinkedinIn className="icon" /> 
                            LinkedIn
                        </a>
                    </p>
                    <p>
                        <a href={social.github} target="_blank" rel="noopener noreferrer" className="contact-social-link">
                            <FaGithub className="icon" /> 
                            GitHub
                        </a>
                    </p>
                </div>
                
                <form className="contact-form-react">
                    <input type="text" placeholder="Your Name" required />
                    <input type="email" placeholder="Your Email" required />
                    <textarea rows="5" placeholder="Your Message" required></textarea>
                    <button type="submit" className="cta-button">Send Message</button>
                </form>
            </div>
        </section>
    );
};

export default Contact;