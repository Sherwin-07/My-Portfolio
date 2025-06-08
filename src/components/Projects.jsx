import React from 'react';
import { ExternalLink, Github, Cpu, Leaf, Music } from 'lucide-react';
import './Projects.css';

const Projects = () => {
  const projects = [
    {
      title: "Land Cover Classification & Fertility Prediction",
      description: "AI-powered system that classifies satellite imagery into 9 land cover types using ResNet model and generates soil fertility heatmaps via geospatial analysis. Integrated Gemini LLM for fertility prediction and crop recommendations.",
      technologies: ["Deep Learning", "Machine Learning", "LLM", "React JS", "Python", "Flask"],
      icon: <Cpu size={24} />,
      github: "https://github.com/Sherwin-07/Land-Cover-Using-Satellite-Image-Analysis.git",
      features: [
        "ResNet-based land cover classification",
        "Geospatial analysis for fertility mapping",
        "Gemini LLM integration for predictions",
        "Flask-React web application"
      ],
      color: "#00d4ff"
    },
    {
      title: "Garden Journal - Garden Management App",
      description: "Comprehensive garden management web application using MERN stack with plant-wise journal system, personalized care guidelines, and watering reminders. Features dynamic garden-themed UI with unique growth insights.",
      technologies: ["MongoDB", "Express.js", "React", "Node.js"],
      icon: <Leaf size={24} />,
      github: "https://github.com/Sherwin-07/Garden-Guide.git",
      features: [
        "Plant-wise journal system",
        "Personalized care guidelines",
        "Watering reminder system",
        "Garden-themed responsive UI"
      ],
      color: "#22c55e"
    },
    {
      title: "Playlist Pro - Music App UI Design",
      description: "Modern and intuitive UI design for a music streaming application. Focused on user experience with clean aesthetics, smooth navigation, and responsive design principles.",
      technologies: ["HTML", "CSS", "JavaScript", "React JS"],
      icon: <Music size={24} />,
      github: "https://github.com/Sherwin-07/playlist-pro.git",
      features: [
        "Modern UI/UX design",
        "Responsive layout",
        "Interactive components",
        "Clean aesthetics"
      ],
      color: "#8b5cf6"
    }
  ];

  return (
    <section id="projects" className="projects">
      <div className="container">
        <div className="section-header">
          <h2 className="animate-fade-in-up">Featured Projects</h2>
          <p className="section-subtitle animate-fade-in-up">
            A showcase of my technical projects and development skills
          </p>
        </div>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className={`project-card animate-fade-in-up`}
              style={{
                animationDelay: `${index * 0.2}s`,
                '--project-color': project.color
              }}
            >
              <div className="project-header">
                <div className="project-icon" style={{color: project.color}}>
                  {project.icon}
                </div>
                <div className="project-links">
                  <a 
                    href={project.github} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="project-link"
                    aria-label="View on GitHub"
                  >
                    <Github size={20} />
                  </a>
                  <a 
                    href={project.github} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="project-link"
                    aria-label="Live Demo"
                  >
                    <ExternalLink size={20} />
                  </a>
                </div>
              </div>

              <div className="project-content">
                <h3>{project.title}</h3>
                <p className="project-description">{project.description}</p>

                <div className="project-features">
                  <h4>Key Features:</h4>
                  <ul>
                    {project.features.map((feature, featureIndex) => (
                      <li key={featureIndex}>{feature}</li>
                    ))}
                  </ul>
                </div>

                <div className="project-technologies">
                  <h4>Technologies:</h4>
                  <div className="tech-tags">
                    {project.technologies.map((tech, techIndex) => (
                      <span 
                        key={techIndex} 
                        className="tech-tag"
                        style={{borderColor: project.color}}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="project-footer">
                <a 
                  href={project.github} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn btn-primary"
                  style={{background: `linear-gradient(135deg, ${project.color}, ${project.color}aa)`}}
                >
                  <Github size={18} />
                  View Project
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="projects-cta animate-fade-in-up">
          <div className="cta-content">
            <h3>Interested in collaborating?</h3>
            <p>I'm always open to discussing new projects and opportunities</p>
            <a href="#contact" className="btn btn-secondary">
              Get In Touch
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;