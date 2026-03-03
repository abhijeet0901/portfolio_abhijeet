import React from 'react';
import { motion } from 'framer-motion';
import { FiMail, FiPhone, FiMapPin, FiLinkedin, FiGithub } from 'react-icons/fi';
import './Contact.scss';

const Contact = () => {
  return (
    <section id="contact" className="contact-section container">
      <h2 className="section-title">Get In Touch</h2>
      
      <div className="contact-content">
        <motion.div 
          className="contact-info"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true, margin: "100px" }}
        >
          <p className="contact-desc">
            I'm currently looking for new opportunities. Whether you have a question or just want to say hi, 
            I'll try my best to get back to you!
          </p>

          <div className="info-list">
            <div className="info-item">
              <span className="icon"><FiMail /></span>
              <div className="details">
                <span className="label">Email</span>
                <a href="mailto:abhijeetdhardubey90@gmail.com">abhijeetdhardubey90@gmail.com</a>
              </div>
            </div>
            
            <div className="info-item">
              <span className="icon"><FiPhone /></span>
              <div className="details">
                <span className="label">Phone</span>
                <a href="tel:+918789471829">+91 8789471829</a>
              </div>
            </div>

            <div className="info-item">
              <span className="icon"><FiMapPin /></span>
              <div className="details">
                <span className="label">Location</span>
                <span>Pune, India</span>
              </div>
            </div>
          </div>

          <div className="social-links">
            <a href="https://linkedin.com/in/abhijeet-dhar-dubey" target="_blank" rel="noopener noreferrer" className="social-icon">
              <FiLinkedin />
            </a>
            <a href="https://github.com/abhijeet0901" target="_blank" rel="noopener noreferrer" className="social-icon">
              <FiGithub />
            </a>
          </div>
        </motion.div>

        <motion.div 
          className="contact-cta"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          viewport={{ once: true, margin: "100px" }}
        >
          <div className="cta-box">
            <h3>Let's build something amazing together</h3>
            <p>Feel free to reach out to me directly using the button below.</p>
            <a href="mailto:abhijeetdhardubey90@gmail.com" className="btn btn-primary contact-btn">
              Contact Me
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
