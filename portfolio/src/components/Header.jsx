// src/components/Header.js
import React, { useState, useEffect } from 'react';

const Header = ({ name }) => {
    const [isSticky, setSticky] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            // Makes the header "sticky" (adds shadow and style defined in App.css)
            setSticky(window.scrollY > 0);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header className={isSticky ? 'sticky' : ''}>
            <div className="container header-container">
                <div className="logo">{name}</div>
                <nav>
                    {/* Navigation links targeting the section IDs */}
                    <a href="#About">Home</a>
                    <a href="#skills">Skills</a>
                    <a href="#projects">Projects</a>
                    <a href="#education">Education</a>
                    <a href="#contact">Contact</a>
                </nav>
            </div>
        </header>
    );
};

export default Header;