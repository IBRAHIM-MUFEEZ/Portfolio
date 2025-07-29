import React from "react";
import "./Skills.css";

const skills = [
  { name: "Python", icon: "fab fa-python" },
  { name: "JavaScript", icon: "fab fa-js" },
  { name: "React.js", icon: "fab fa-react" },
  { name: "Node.js", icon: "fab fa-node-js" },
  { name: "Express.js", icon: "fas fa-server" },
  { name: "SQL (PostgreSQL, MySQL)", icon: "fas fa-database" },
  { name: "MongoDB", icon: "fas fa-leaf" },
  { name: "OOP", icon: "fas fa-cubes" },
];

const Skills = () => {
  return (
    <section className="skills-section" style={{ backgroundColor: "#f0f9ff" }}>
      <div className="skills-container">
        <h2 className="section-title">Technical Skills</h2>
        <div className="skills-list">
          {skills.map((skill) => (
            <div key={skill.name} className="skill-item">
              <i className={skill.icon + " skill-logo"} aria-hidden="true"></i>
              <span className="skill-name">{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
