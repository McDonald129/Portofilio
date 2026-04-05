import React, { useState, useEffect } from 'react';
import { projects } from '../../data/portfolioData';
import './ProjectsSection.css';

export default function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [visibleCards, setVisibleCards] = useState(new Set());

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const cardIndex = parseInt(entry.target.dataset.index);
            setVisibleCards(prev => new Set([...prev, cardIndex]));
          }
        });
      },
      { threshold: 0.1 }
    );

    const cards = document.querySelectorAll('.project-card');
    cards.forEach(card => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  const openModal = (project) => {
    setSelectedProject(project);
    document.body.classList.add('modal-open');
  };

  const closeModal = () => {
    setSelectedProject(null);
    document.body.classList.remove('modal-open');
  };

  return (
    <section id="projects" className="projects-section">
      <div className="projects-container">
        <h1 className="projects-title">
          My Projects
        </h1>

        <div className="projects-grid">
          {projects.map((project, index) => {
            const isVisible = visibleCards.has(index);

            return (
              <div
                key={project.id}
                className={`project-card ${isVisible ? 'visible' : ''}`}
                data-index={index}
                style={{ transitionDelay: `${index * 0.1}s` }}
                onClick={() => openModal(project)}
              >
                {/* Project Image Placeholder */}
                <div className="project-image">
                  <div className="project-image-placeholder">
                    <svg className="project-image-icon" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M14.23 12.004a2.236 2.236 0 0 0 .406-1.504l.031-1.726a2.5 2.5 0 0 0-2.5-2.5h-3a2.5 2.5 0 0 0-2.5 2.5v1.726a2.236 2.236 0 0 0 .406 1.504L9.5 13.5l4.73-1.496zM12 7.5a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                    </svg>
                  </div>

                  {/* Hover overlay */}
                  <div className="project-overlay">
                    <svg className="overlay-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                  </div>
                </div>

                <h3 className="project-title">
                  {project.title}
                </h3>

                <p className="project-description">
                  {project.description}
                </p>

                <div className="project-technologies">
                  {project.technologies.split(', ').map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="tech-tag"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="project-link">
                  View Details →
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Project Modal */}
      {selectedProject && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-container" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h2 className="modal-title">
                {selectedProject.title}
              </h2>
              <button
                onClick={closeModal}
                className="modal-close-btn"
              >
                <svg className="close-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <div className="modal-content">
              <p className="modal-description">
                {selectedProject.description}
              </p>

              <div className="modal-section">
                <h3 className="modal-section-title">Technologies Used</h3>
                <div className="modal-technologies">
                  {selectedProject.technologies.split(', ').map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="modal-tech-tag"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="modal-section">
                <h3 className="modal-section-title">Key Features</h3>
                <ul className="features-list">
                  {selectedProject.features.map((feature, fIndex) => (
                    <li key={fIndex} className="feature-item">
                      <svg className="feature-icon" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                      </svg>
                      <span className="feature-text">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="modal-footer">
                <a
                  href={selectedProject.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="modal-btn-primary"
                >
                  View Live Demo
                </a>
                <button
                  onClick={closeModal}
                  className="modal-btn-secondary"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}