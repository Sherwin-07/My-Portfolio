import React from 'react';
import './About.css';

const About = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        <div className="about-content">
          <div className="about-text animate-fade-in-left">
            <h2>About Me</h2>
            <div className="about-description">
              <p>
                I'm a passionate WEB DEVELOPER driven by curiosity and a love for creating digital solutions. My journey in tech has 
                been focused on web development, where I combine creativity with technical skills to 
                build meaningful applications.
              </p>
              <p>
                With a strong foundation in modern web technologies like React, JavaScript, and Python, 
                I enjoy tackling complex problems and turning ideas into reality. I'm particularly 
                interested in UI/UX design and creating user-centered experiences that make a difference.
              </p>
              <p>
                When I'm not coding, you'll find me exploring new technologies, working on personal 
                projects, or collaborating with fellow developers. I believe in continuous learning 
                and staying updated with the latest trends in technology.
              </p>
            </div>
            
            <div className="about-highlights">
              <div className="highlight">
                <h4>Problem Solver</h4>
                <p>I love breaking down complex challenges into manageable solutions</p>
              </div>
              <div className="highlight">
                <h4>Team Player</h4>
                <p>Collaborative approach to development with strong communication skills</p>
              </div>
              <div className="highlight">
                <h4>Continuous Learner</h4>
                <p>Always exploring new technologies and improving my skill set</p>
              </div>
            </div>
          </div>

          <div className="about-visual animate-fade-in-right">
            <div className="about-card">
              <div className="card-header">
                <h3>Quick Facts</h3>
              </div>
              <div className="facts-list">
                <div className="fact-item">
                  <span className="fact-label">Location</span>
                  <span className="fact-value">Madurai, Tamil Nadu</span>
                </div>
                <div className="fact-item">
                  <span className="fact-label">Education</span>
                  <span className="fact-value">B.Tech IT (2021-2025)</span>
                </div>
                <div className="fact-item">
                  <span className="fact-label">Interests</span>
                  <span className="fact-value">Web Design, UI/UX</span>
                </div>
                <div className="fact-item">
                  <span className="fact-label">Languages</span>
                  <span className="fact-value">Python, JavaScript, Java</span>
                </div>
                <div className="fact-item">
                  <span className="fact-label">Tools</span>
                  <span className="fact-value">Figma, Canva, Tableau</span>
                </div>
              </div>
            </div>

            <div className="skills-preview">
              <h4>Core Strengths</h4>
              <div className="strength-tags">
                <span className="tag">Attention to Detail</span>
                <span className="tag">Effective Communication</span>
                <span className="tag">Adaptability</span>
                <span className="tag">Creative Thinking</span>
                <span className="tag">Technical Proficiency</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
