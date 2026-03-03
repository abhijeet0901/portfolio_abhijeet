import React from 'react';
import { motion } from 'framer-motion';
import './Skills.scss';

const Skills = () => {
  const skillCategories = [
    {
      title: "Languages",
      skills: ["Java", "TypeScript", "C", "C++", "MySQL", "HTML", "CSS", "JavaScript", "ES6"]
    },
    {
      title: "Technologies & Tools",
      skills: ["React.js", "Next.js", "Node.js", "SCSS", "Material UI", "Spring Boot", "Git", "GitHub"]
    },
    {
      title: "Databases",
      skills: ["MongoDB", "MySQL"]
    }
  ];

  const education = {
    institution: "Silicon Institute of Technology",
    duration: "2020 – 2024",
    degree: "BTech in Computer Science & Technology",
    grade: "CGPA: 9.30"
  };

  const achievements = [
    "Secured Top 1% rank in NPTEL course: Introduction to Industry 4.0 and Industrial Internet of Things.",
    "Solved 250+ coding problems on LeetCode, GeeksforGeeks, and Coding Ninja."
  ];

  return (
    <section id="skills" className="skills-section container">
      <h2 className="section-title">Skills & Education</h2>
      
      <div className="skills-grid">
        <div className="skills-container">
          {skillCategories.map((category, index) => (
            <motion.div 
              key={index}
              className="skill-category"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true, margin: "100px" }}
            >
              <h3>{category.title}</h3>
              <div className="skills-list">
                {category.skills.map((skill, i) => (
                  <span key={i} className="skill-pill">{skill}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <div className="side-container">
          <motion.div 
            className="education-card"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
            viewport={{ once: true, margin: "100px" }}
          >
            <h3>Education</h3>
            <div className="edu-details">
              <h4>{education.institution}</h4>
              <span className="duration">{education.duration}</span>
              <p>{education.degree}</p>
              <span className="grade">{education.grade}</span>
            </div>
          </motion.div>

          <motion.div 
            className="achievements-card mt-4"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            viewport={{ once: true, margin: "100px" }}
          >
            <h3>Achievements</h3>
            <ul className="achievement-list">
              {achievements.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
