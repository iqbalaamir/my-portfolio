import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { motion } from 'framer-motion';
import './Footer.css';

const Footer = () => {
  return (
    <motion.footer initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
      <div className="footer-container">
        <div className="footer-logo">
          <h1>Aamir Iqbal</h1>
        </div>
        <div className="footer-nav">
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
        <div className="footer-social">
          <a href="https://github.com/iqbalaamir" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
          <a href="https://linkedin.com/in/aamiriqbal1998" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
          <a href="https://twitter.com/Iqbal040Aamir" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
        </div>
        <div className="footer-copyright">
          <p>&copy; {new Date().getFullYear()} Aamir Iqbal. All rights reserved.</p>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
