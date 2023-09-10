import React from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import './Projects.css';
import CDE from '../asset/CDE.jpg'
import Digital from '../asset/digital.jpeg'
import Edtech from '../asset/edtech.jpeg'

const Projects = () => {
  const projectList = [
    {
      title: 'CRM - Customer Relationship Management',
      image: 'https://w0.peakpx.com/wallpaper/694/230/HD-wallpaper-top-5-reasons-why-you-need-a-crm-aacesoft-business-management-software-erp.jpg',
      github: 'https://github.com/iqbalaamir/CRM-Frontend',
      demo: 'https://crm-guvi.netlify.app/'
    },
    {
      title: 'OMS - Order Management System',
      image: 'https://dynamics.folio3.com/blog/wp-content/uploads/2021/04/order-management-software.jpg',
      github: 'https://github.com/iqbalaamir/Frontend-Order-Management-System',
      demo: 'https://scintillating-meerkat-476e4b.netlify.app/'
    },
    {
      title: 'Chat App',
      image: 'https://camo.githubusercontent.com/1edd6e0eb545997223d470c8143f9d863a7003469b38190310eee2afade49ae8/68747470733a2f2f692e696d6775722e636f6d2f566b6477416d652e706e67',
      github: 'https://github.com/iqbalaamir/chat-app',
      demo: 'https://github.com/iqbalaamir/chat-app'
    },
    {
      title: 'Digital Savers ',
      image: Digital,
      github: 'https://github.com/iqbalaamir?tab=repositories',
      demo: 'https://www.digitalsavers.in/'
    },
    {
      title: 'EdtechSavers - Educational Technology',
      image: Edtech,
      github: 'https://github.com/iqbalaamir?tab=repositories',
      demo: 'https://www.edtechsavers.in/'
    },
    {
      title: 'Career Dreams Education - Educational Portal',
      image: CDE,
      github: 'https://github.com/iqbalaamir?tab=repositories',
      demo: 'https://www.careerdreams.co.in/'
    },
  ];

  return (
    <div className="projects-section">
      <h2>My Projects</h2>
      <div className="projects-container">
        {projectList.map((project, index) => (
          <div className="project-card" key={index}>
            <img src={project.image} alt={project.title} className="project-image" />
            <h3>{project.title}</h3>
            <div className="project-links">
              <a href={project.github} target="_blank" rel="noopener noreferrer">
                <FaGithub /> GitHub
              </a>
              <a href={project.demo} target="_blank" rel="noopener noreferrer">
                <FaExternalLinkAlt /> Live Demo
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
