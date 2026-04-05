import React from 'react';
import './AboutSection.css';
import profileImage from '../../assets/about-image.png';

export default function AboutSection() {
    return (
        <section id="about" className="about-section">
            <div className="about-container">
                <h1 className="about-title">
                    About Me
                </h1>

                {/* Image and Bio Row - Flex together */}
                <div className="image-bio-row">
                    {/* Image Column */}
                    <div className="about-image-col">
                        <div className="image-wrapper">
                            <div className="image-frame">
                                <div className="profile-image-container">
                                    <img src={profileImage} alt="Profile Picture" className="profile-image" />
                                    <div className="blob blob-1" style={{ animationDelay: '1s' }}></div>
                                    <div className="blob blob-2" style={{ animationDelay: '2s' }}></div>
                                    <div className="blob blob-3" style={{ animationDelay: '3s' }}></div>
                                </div>
                            </div>
                            <div className="glow-effect"></div>
                        </div>
                    </div>

                    {/* Bio Content Column */}
                    <div className="bio-content">
                        <p className="bio-text">
                            I am a passionate and driven software developer with a Diploma in Computer Science. My journey into development started with a curiosity about how systems work behind the scenes, which quickly grew into a strong interest in building real-world applications.
                        </p>

                        <p className="bio-text">
                            During my internship at ICEP Emalahleni, I gained practical experience solving technical problems, and contributing to real systems. I have also worked on multiple academic and personal projects, including web applications, backend systems, and Android apps.
                        </p>

                        <p className="bio-text">
                            I enjoy working across the full stack — from designing user interfaces to building backend APIs and managing databases. My current focus is on technologies like React, Node.js, and modern JavaScript, while also maintaining a strong foundation in Java and Python.
                        </p>
                    </div>
                </div>

                {/* Highlight and Opportunity Section */}
                <div className="highlight-opportunity">
                    <p className="bio-text highlight">
                        What sets me apart is my ability to learn quickly, adapt to new technologies, and stay consistent even when things get challenging. I don't just aim to write code — I aim to build solutions that are useful, efficient, and reliable.
                    </p>

                    <p className="bio-text">
                        I am currently seeking an entry-level or internship opportunity where I can contribute, learn from experienced developers, and grow into a professional software engineer.
                    </p>
                </div>

                {/* Info Cards at Bottom */}
                <div className="info-cards">
                    <div className="info-card">
                        <h3 className="info-title">Location</h3>
                        <p className="info-text">South Africa</p>
                    </div>
                    <div className="info-card">
                        <h3 className="info-title">Experience</h3>
                        <p className="info-text">2+ Years</p>
                    </div>
                    <div className="info-card">
                        <h3 className="info-title">Education</h3>
                        <p className="info-text">Diploma in CS</p>
                    </div>
                    <div className="info-card">
                        <h3 className="info-title">Availability</h3>
                        <p className="info-text">Open to Work</p>
                    </div>
                </div>
            </div>
        </section>
    );
}