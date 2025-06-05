import React from "react";
import "./Skills.css";

export default function Skills() {
  const skills = [
    "JavaScript",
    "React",
    "Tailwind CSS",
    "Node.js",
    "Express",
    "MongoDB",
    "Git",
    "HTML",
    "CSS",
  ];

  return (
    <div className="skills-container">
      <h1 className="skills-title">My Skills</h1>
      <ul className="skills-list">
        {skills.map((skill, index) => (
          <li key={index} className="skill-item">
            {skill}
          </li>
        ))}
      </ul>
    </div>
  );
}
