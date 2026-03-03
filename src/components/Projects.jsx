import React from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiExternalLink } from 'react-icons/fi';
import './Projects.scss';

const Projects = () => {
  return (
    <section id="projects" className="projects-section container">
      <h2 className="section-title">Notable Projects</h2>
      
      <div className="projects-grid">
        <motion.div 
          className="project-card"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true, margin: "100px" }}
        >
          <div className="project-content">
            <h3 className="project-title">EcomGrove - Shopping Cart Website</h3>
            <p className="project-desc">
              Developed a full-stack E-Commerce website with comprehensive CRUD operations. 
              Features include login, registration, and product management functionality. 
              Implemented JWT authentication for secure user and admin authorization processes.
            </p>
            <ul className="project-tech-list">
              <li>React.js</li>
              <li>Node.js</li>
              <li>MongoDB</li>
              <li>Express.js</li>
            </ul>
            <div className="project-links">
              <a href="https://github.com/abhijeet0901/EcomGrove-MERN" aria-label="GitHub Link"><FiGithub /></a>
              <a href="#" aria-label="External Link"><FiExternalLink /></a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
