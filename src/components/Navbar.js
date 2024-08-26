import React, { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const scrollToSection = (e, sectionId) => {
    e.preventDefault();
    const section = document.querySelector(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false); // Fechar o menu ao clicar no item
  };

  return (
    <nav className="navbar">
      {/* <div className="logo">My Portfolio</div> */}
      <button className="menu-toggle" onClick={toggleMenu}>
        ☰
      </button>
      <ul className={`nav-links ${isOpen ? 'open' : ''}`}>
        <li>
          <a onClick={(e) => scrollToSection(e, '#home')}>Home</a>
        </li>
        <li>
          <a onClick={(e) => scrollToSection(e, '#about-me')}>About Me</a>
        </li>
        <li>
          <a onClick={(e) => scrollToSection(e, '#career-timeline')}>Career Timeline</a>
        </li>
        <li>
          <a onClick={(e) => scrollToSection(e, '#why-buzzvel')}>Portfolio</a>
        </li>
        <li>
          <a onClick={(e) => scrollToSection(e, '#footer')}>Contact</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
