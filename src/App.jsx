import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import StarBackground from './components/StarBackground';
import './App.scss';

function App() {
  return (
    <div className="app">
      <StarBackground />
      <Navbar />
      <main>
        <Hero />
        <Experience />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <footer className="footer">
        <p>© {new Date().getFullYear()} Abhijeet Dhar Dubey. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
