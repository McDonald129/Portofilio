import React, { useEffect, useState } from "react";
import { skills } from "../../data/portfolioData";
import "./SkillsSection.css";

export default function SkillsSection() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const section = document.getElementById("skills");

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" className="skills-section">
      <div className="skills-container">
        <h1 className="skills-title">Skills & Expertise</h1>

        <div className="skills-categories">
          {skills.map((category, index) => (
            <div key={index} className="skill-category">
              <h2 className="category-title">{category.category}</h2>

              <div className="skills-grid">
                {category.items.map((skill, i) => {
                  const Icon = skill.icon;

                  return (
                    <div key={i} className="skill-card">
                      <div className="skill-header">
                        <div className="skill-icon">
                          <Icon />
                        </div>
                        <h3 className="skill-name">{skill.name}</h3>
                      </div>

                      <div className="skill-progress-container">
                        <div className="skill-progress-bar-wrapper">
                          <div
                            className="skill-progress-bar"
                            style={{
                              width: visible
                                ? `${skill.proficiency}%`
                                : "0%",
                            }}
                          >
                            <span className="progress-text">
                              {skill.proficiency}%
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}