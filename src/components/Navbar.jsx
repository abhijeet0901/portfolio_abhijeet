import React, { useState, useEffect, useRef } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
import './Navbar.scss';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('');
  const isClickScrolling = useRef(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      // Skip dynamic updates if we are actively smooth scrolling from a manual click
      if (isClickScrolling.current) return;

      // If at the absolute bottom of the page, snap to contact
      if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight - 50) {
        setActiveLink('contact');
        return;
      }

      const sections = ['objective', 'experience', 'projects', 'skills', 'contact'];
      let current = '';

      sections.forEach(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          // Detect if the section is occupying the middle part of the viewport
          const centerPoint = window.innerHeight * 0.4; // 40% from the top
          if (rect.top <= centerPoint && rect.bottom >= centerPoint) {
            current = section;
          }
        }
      });

      setActiveLink(current);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e, link) => {
    e.preventDefault();
    setMenuOpen(false);
    setActiveLink(link);
    isClickScrolling.current = true;

    const element = document.getElementById(link);
    if (element) {
      // Calculate scroll position accurately and smooth scroll there
      const topOffset = element.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({
        top: topOffset,
        behavior: 'smooth'
      });
    }

    // Re-enable the tracking spy after the smooth-scroll completes
    setTimeout(() => {
      isClickScrolling.current = false;
    }, 1000); 
  };

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="nav-content container">
        <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </div>

        <ul className={`nav-links ${menuOpen ? 'active' : ''}`}>
          <li><a href="#objective" className={activeLink === 'objective' ? 'active-link' : ''} onClick={(e) => handleNavClick(e, 'objective')}>Objective</a></li>
          <li><a href="#experience" className={activeLink === 'experience' ? 'active-link' : ''} onClick={(e) => handleNavClick(e, 'experience')}>Experience</a></li>
          <li><a href="#projects" className={activeLink === 'projects' ? 'active-link' : ''} onClick={(e) => handleNavClick(e, 'projects')}>Projects</a></li>
          <li><a href="#skills" className={activeLink === 'skills' ? 'active-link' : ''} onClick={(e) => handleNavClick(e, 'skills')}>Skills</a></li>
          <li><a href="#contact" className={activeLink === 'contact' ? 'active-link' : ''} onClick={(e) => handleNavClick(e, 'contact')}>Contact</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
