import React, { useEffect, useState } from 'react';
import './HomeSection.css';

export default function HomeSection() {
  const [displayText, setDisplayText] = useState('');
  const fullText = "Hi, I'm Thabiso Shoba — Junior Full Stack Developer";

  useEffect(() => {
    let i = 0;
    const timer = setInterval(() => {
      if (i < fullText.length) {
        setDisplayText(fullText.slice(0, i + 1));
        i++;
      } else {
        clearInterval(timer);
      }
    }, 100);

    return () => clearInterval(timer);
  }, []);

  return (
    <section id="home" className="home-section">
      {/* Animated background elements */}
      <div className="animated-bg">
        <div className="bg-circle bg-circle-1" style={{ animationDelay: '0s' }}></div>
        <div className="bg-circle bg-circle-2" style={{ animationDelay: '2s' }}></div>
        <div className="bg-circle bg-circle-3" style={{ animationDelay: '4s' }}></div>
        <div className="bg-circle bg-circle-4" style={{ animationDelay: '6s' }}></div>
      </div>

      <div className="home-container">
        <div className="home-content">
          <h1 className="home-title">
            <span className="typed-text">
              {displayText}
              <span className="cursor"></span>
            </span>
          </h1>

          <p className="home-description">
            I build practical, scalable web and mobile applications using modern technologies like React, Node.js, and Java. I focus on solving real-world problems through clean code, intuitive design, and efficient systems.
          </p>

          <p className="home-description">
            I'm a Computer Science graduate with hands-on experience in full-stack development, including web applications, backend systems, and Android development. I've worked on real projects involving databases, APIs, and user-focused systems.
          </p>

          <p className="home-description highlight-text">
            I'm currently looking for opportunities where I can grow as a developer, contribute to meaningful projects, and continue sharpening my skills in modern software development.
          </p>

          <div className="home-buttons">
            <a href="#projects" className="btn btn-primary">
              View My Projects
            </a>
            <a href="#contact" className="btn btn-secondary">
              Contact Me
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}