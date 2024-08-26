import React from 'react';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { icons } from './icons';

const Footer = () => {
  const scrollToSection = (e, sectionId) => {
    e.preventDefault();
    const section = document.querySelector(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <footer id="footer" className="footer">
      <div className="footer-container">
        <div className="footer-links">
          <h4>Shortcuts</h4>
          <nav className="footer-nav">
          <a onClick={(e) => scrollToSection(e, '#home')}>Home</a>
          <a onClick={(e) => scrollToSection(e, '#about-me')}>About Me</a>
          <a onClick={(e) => scrollToSection(e, '#career-timeline')}>Career Timeline</a>
          <a onClick={(e) => scrollToSection(e, '#why-buzzvel')}>Portfolio</a>
          </nav>
        </div>
        
        <div className="footer-contact">
          <h4>Contact</h4>
          <p>Email: o.theobittencourt@gmail.com</p>
        </div>
        
        <div className="footer-social">
          <h4>Follow Me</h4>
          <div className="social-icons">
            <a href="https://instagram.com/theo.bitt" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={icons.instagram} />
            </a>
            <a href="https://www.linkedin.com/in/theobittencourt/" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={icons.linkedin} />
            </a>
            <a href="https://github.com/theobitt" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={icons.github} />
            </a>
          </div>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} <a href="https://www.linkedin.com/in/theobittencourt/" className="author-name">Theo Bittencourt </a> -  All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
