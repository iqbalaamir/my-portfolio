import React from 'react';
import { FaLaptopCode, FaGraduationCap, FaBriefcase, FaDatabase } from 'react-icons/fa';
import Typed from 'react-typed';
import './AboutMe.css';

const AboutMe = () => {
  return (
    <div className="about-me-section">
      <h2>About Me</h2>
      <Typed
        className="typed-text"
        strings={[
          "Tech Enthusiast",
          "Full Stack Developer",
          "Certified MERN Stack Developer",
          "3 Years of Experience"
        ]}
        typeSpeed={40}
        backSpeed={50}
        loop
      />
      <div className="about-me-content">
        <div className="about-me-icons">
          <FaLaptopCode className="about-icon" />
          <FaGraduationCap className="about-icon" />
          <FaBriefcase className="about-icon" />
          <FaDatabase className="about-icon" />
        </div>
        <p>
          I am a tech enthusiast with 3 years of experience in Laravel and MERN Stack. 
          Certified MERN Stack developer from IIT Madras. Worked in EdTech and Fintech companies, 
          creating innovative solutions. Skilled in front-end, back-end, database management, 
          and API integration. Detail-oriented problem solver with a user-centric approach.
        </p>
      </div>
    </div>
  );
};

export default AboutMe;
