import React from 'react';
import './Projects.css';

const projects = [
  {
    id: 1,
    title: 'Project One',
    description: 'This is a description of project one.',
    link: 'https://github.com/thabiso/project-one',
  },
  {
    id: 2,
    title: 'Project Two',
    description: 'This is a description of project two.',
    link: 'https://github.com/thabiso/project-two',
  },
  {
    id: 3,
    title: 'Project Three',
    description: 'This is a description of project three.',
    link: 'https://github.com/thabiso/project-three',
  },
  {
    id: 4,
    title: 'Project Four',
    description: 'This is a description of project four.',
    link: 'https://github.com/thabiso/project-four',
  },
];

export default function Projects() {
  return (
    <main className="main-container">
      <h1 className="title">Projects</h1>
      <ul className="project-grid">
        {projects.map(({ id, title, description, link }) => (
          <li key={id} className="project-item">
            <h2>{title}</h2>
            <p>{description}</p>
            <a href={link} target="_blank" rel="noopener noreferrer">View Project</a>
          </li>
        ))}
      </ul>
    </main>
  );
}
