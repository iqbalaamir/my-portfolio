import React from 'react';
import './Hero.css';
import { motion } from 'framer-motion';
import Typed from 'react-typed';

function Hero() {
  return (
    <div className="hero">
      <div className="overlay"></div>
      <div className="container">
        <motion.div 
          initial={{ opacity: 0, y: -50 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 1 }}
        >
          <h1 className="hero-title">Welcome to My Portfolio</h1>
        </motion.div>
        <motion.img 
          src="/aamir.jpg" 
          alt="Aamir" 
          className="img-fluid" 
          initial={{ scale: 0 }} 
          animate={{ scale: 1 }} 
          transition={{ type: 'spring', stiffness: 50 }}
          whileHover={{ scale: 1.1 }}
        />
        <motion.div 
          initial={{ opacity: 0, y: 50 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 1, delay: 0.5 }}
        >
          <Typed
            className="hero-subtitle"
            strings={['Full Stack Developer', 'Tech Enthusiast']}
            typeSpeed={40}
            backSpeed={50}
            loop
          />
        </motion.div>
      </div>
    </div>
  );
}

export default Hero;
