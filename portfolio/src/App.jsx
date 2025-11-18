// src/App.js

import React from 'react';
import './App.css'; 
import { personalData } from './data';

// Component Imports
import Header from './components/Header';
import Footer from './components/Footer';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Education from './components/Education';
import Contact from './components/Contact'; 

const App = () => {
    return (
        <div className="portfolio-app">
            <Header name={personalData.name} />
            
            <main>
                <About 
                    name={personalData.name} 
                    title={personalData.title} 
                    summary={personalData.summary}
                />
                
                <Skills skills={personalData.skills} /> 
                {/* Moved skills up, as recruiters want to see skills early */}

                <Projects projects={personalData.projects} />
                
                <Education education={personalData.education} />

                <Contact 
                    contact={personalData.contact} 
                    social={personalData.social} 
                />
            </main>

            <Footer name={personalData.name} />
        </div>
    );
};

export default App;