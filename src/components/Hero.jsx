import React from 'react';
import { motion } from 'framer-motion';
import './Hero.scss';

const Hero = () => {
  return (
    <section id="objective" className="hero-section container">
      <motion.div 
        className="hero-content"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <span className="greeting">Hi, I'm</span>
        <h1 className="name">Abhijeet Dhar Dubey</h1>
        <h2 className="role">UI Developer</h2>
        
        <p className="objective">
          UI Developer with expertise in Next.js, React.js, Redux, TypeScript, and SCSS, 
          focused on building scalable, responsive, and performance-optimized 
          web applications with strong API integration and state management experience.
        </p>
        
        <div className="hero-actions">
          <a href="#projects" className="btn btn-primary">View My Work</a>
          <a href="#contact" className="btn btn-secondary">Contact Me</a>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
