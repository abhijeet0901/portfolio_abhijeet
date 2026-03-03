import React from 'react';
import { motion } from 'framer-motion';
import './Experience.scss';

const Experience = () => {
  return (
    <section id="experience" className="experience-section container">
      <h2 className="section-title">Experience</h2>
      <div className="experience-content">
        <motion.div 
          className="experience-card"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true, margin: "100px" }}
        >
          <div className="card-header">
            <h3>Tata Consultancy Services</h3>
            <span className="duration">Jan 2025 – Present</span>
          </div>
          <h4 className="role-title">UI Developer</h4>
          <p className="tech-stack">React.js · Redux · SCSS · JavaScript · TypeScript</p>
          
          <ul className="achievements-list">
            <li>Developed UI for <strong>TATA World website</strong>, a centralized platform showcasing programs, events, news articles, chairman's messages, and initiatives across Tata Group companies. Expected usage: 6.5M+ employees.</li>
            <li>Designed interactive cards and games (Quiz Contest, Word Scramble) with full API integration.</li>
            <li>Built Gamification Badges system (Gamification Geek & Content Collector).</li>
            <li>Implemented search functionality, hashtags, and pill-based navigation.</li>
            <li>Integrated React with Redux for API-driven state management and Adobe Experience Manager (AEM).</li>
            <li>Ensured responsive UI using SCSS, reusable components, lazy loading, and code-splitting.</li>
            <li>Worked in Agile Scrum environment ensuring accessibility and cross-browser compatibility.</li>
          </ul>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
