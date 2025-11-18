// src/components/Footer.js
import React from 'react';

const Footer = ({ name }) => {
    const year = new Date().getFullYear();
    return (
        <footer>
            <div className="container footer-content">
                <p>&copy; {year} {name}. All rights reserved.</p>
                <p>Designed with React & Pure CSS.</p>
            </div>
        </footer>
    );
};

export default Footer;