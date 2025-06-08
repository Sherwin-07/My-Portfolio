import React from 'react';
import { Download, Mail, MapPin, Phone } from 'lucide-react';
import profileImage from '../assets/new.jpg';
import './Hero.css';

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="hero-background">
        <div className="hero-grid"></div>
        <div className="hero-glow"></div>
      </div>
      
      <div className="container">
        <div className="hero-content">
          <div className="hero-text animate-fade-in-left">
            <h1 className="hero-title">
               Hi, I'm <span className="gradient-text">Sherwin Raj S A J </span>
            </h1>
            <p className="hero-subtitle">
              Web Developer
            </p>
            <p className="hero-description">
              Driven and adaptable individual focused on continuous learning and eager to leverage my abilities in a collaborative and evolving environment.
            </p>
            
            <div className="hero-info">
              <div className="info-item">
                <MapPin size={18} />
                <span>Madurai, Tamil Nadu</span>
              </div>
              <div className="info-item">
                <Mail size={18} />
                <span>sathishsherwin106@gmail.com</span>
              </div>
              <div className="info-item">
                <Phone size={18} />
                <span>+91 82484 61818</span>
              </div>
            </div>

            <div className="hero-actions">
              <a href="#contact" className="btn btn-primary">
                Get In Touch
              </a>
              <a href="#projects" className="btn btn-secondary">
                View Projects
              </a>
            </div>
          </div>

          <div className="hero-visual animate-fade-in-right">
            <div className="hero-card">
              <div className="card-glow"></div>
              <div className="profile-section">
                <div className="profile-avatar">
                <img src={profileImage} alt="Profile" />
          </div>
                <h3>Sherwin Raj S A J</h3>
                <p>B.Tech Information Technology</p>
                <p>Thiagarajar College of Engineering</p>
              </div>
              
              <div className="stats-section">
                <div className="stat">
                  <span className="stat-number">2025</span>
                  <span className="stat-label">Graduate</span>
                </div>
                <div className="stat">
                  <span className="stat-number">3+</span>
                  <span className="stat-label">Projects</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;




   <div className="profile-section">
                <div className="profile-avatar">
                  <span className="avatar-text">SR</span>
                </div>
