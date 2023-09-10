import React from 'react';
import './Navbar.css';
import { Link } from 'react-scroll';
import { useTheme } from './context/ThemeContext';
import { FaHome, FaCode, FaProjectDiagram, FaUser, FaEnvelope, FaMoon, FaSun } from 'react-icons/fa';

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();
  return (
    <nav className={`navbar ${theme}`}>
      <Link activeClass="active" to="hero" spy={true} smooth={true}>
        <FaHome className="icon" />
        Home
      </Link>
      <Link activeClass="active" to="skills" spy={true} smooth={true}>
        <FaCode className="icon" />
        Skills
      </Link>
      <Link activeClass="active" to="projects" spy={true} smooth={true}>
        <FaProjectDiagram className="icon" />
        Projects
      </Link>
      <Link activeClass="active" to="about" spy={true} smooth={true}>
        <FaUser className="icon" />
        About Me
      </Link>
      <Link activeClass="active" to="contact" spy={true} smooth={true}>
        <FaEnvelope className="icon" />
        Contact
      </Link>
      <button onClick={toggleTheme}>
        {theme === 'light' ? <FaMoon /> : <FaSun />}
      </button>
    </nav>
  );
};

export default Navbar;
