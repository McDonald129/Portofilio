import React, { useEffect, useRef } from "react";
import HomeSection from './sections/HomeSection';
import AboutSection from './sections/AboutSection';
import SkillsSection from './sections/SkillsSection';
import ProjectsSection from './sections/ProjectsSection';
import ContactSection from './sections/ContactSection';
import './Sections.css';

export default function Sections() {
  const sectionRefs = useRef([]);

  useEffect(() => {
    sectionRefs.current = sectionRefs.current.slice(0, 5);
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate');
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: '0px 0px -10% 0px'
    });

    sectionRefs.current.forEach(ref => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <main className="sections-container">
      <section 
        id="home"
        ref={el => (sectionRefs.current[0] = el)} 
        className="page-section home-section"
      >
        <HomeSection />
      </section>
      
      <section 
        id="about"
        ref={el => (sectionRefs.current[1] = el)} 
        className="page-section about-section"
      >
        <AboutSection />
      </section>
      
      <section 
        id="skills"
        ref={el => (sectionRefs.current[2] = el)} 
        className="page-section skills-section"
      >
        <SkillsSection />
      </section>
      
      <section 
        id="projects"
        ref={el => (sectionRefs.current[3] = el)} 
        className="page-section projects-section"
      >
        <ProjectsSection />
      </section>
      
      <section 
        id="contact"
        ref={el => (sectionRefs.current[4] = el)} 
        className="page-section contact-section"
      >
        <ContactSection />
      </section>
    </main>
  );
}