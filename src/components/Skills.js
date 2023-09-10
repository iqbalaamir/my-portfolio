import React from 'react';
import './Skills.css';

const Skills = () => {
  const skills = [
    { name: 'Node.js', level: 80 },
    { name: 'React.js', level: 80 },
    { name: 'Mongo', level: 75 },
    { name: 'Express', level: 80 },
    { name: 'AWS', level: 80 },
  ];

  return (
    <div className="skills-section">
      <h2 className="skills-title">My Skills</h2>
      <div className="skills-container">
        {skills.map((skill, index) => (
          <div className="skill" key={index}>
            <div className="skill-name">{skill.name}</div>
            <div className="progress">
              <div className="progress-done" style={{ width: `${skill.level}%` }}>
                {skill.level}%
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
