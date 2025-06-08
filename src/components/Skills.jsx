import React from 'react';
import { Code, Palette, Database, Globe, Wrench, Users } from 'lucide-react';
import './Skills.css';

const Skills = () => {
  const skillCategories = [
    {
      icon: <Code size={24} />,
      title: "Programming Languages",
      skills: ["Python", "JavaScript", "Java"],
      color: "#00d4ff"
    },
    {
      icon: <Globe size={24} />,
      title: "Web Development",
      skills: ["HTML", "CSS", "React JS", "JavaScript"],
      color: "#22c55e"
    },
    {
      icon: <Palette size={24} />,
      title: "Design & Tools",
      skills: ["Figma", "Canva", "Tableau", "UI/UX Design"],
      color: "#f59e0b"
    },
    {
      icon: <Database size={24} />,
      title: "Key Interests",
      skills: ["Web Designing", "UI/UX Designing", "Data Visualization"],
      color: "#8b5cf6"
    },
    {
      icon: <Wrench size={24} />,
      title: "Technical Skills",
      skills: ["Attention to Detail", "Problem Solving", "Technical Proficiency"],
      color: "#ef4444"
    },
    {
      icon: <Users size={24} />,
      title: "Interpersonal Skills",
      skills: ["Effective Communication", "Team Player", "Adaptability"],
      color: "#06b6d4"
    }
  ];

  return (
    <section id="skills" className="skills">
      <div className="container">
        <div className="section-header">
          <h2 className="animate-fade-in-up">Technical & Interpersonal Skills</h2>
          <p className="section-subtitle animate-fade-in-up">
            A comprehensive overview of my technical expertise and soft skills
          </p>
        </div>

        <div className="skills-grid">
          {skillCategories.map((category, index) => (
            <div 
              key={index} 
              className={`skill-category animate-fade-in-up`}
              style={{animationDelay: `${index * 0.1}s`}}
            >
              <div className="category-header">
                <div className="category-icon" style={{color: category.color}}>
                  {category.icon}
                </div>
                <h3>{category.title}</h3>
              </div>

              <div className="skills-list">
                {category.skills.map((skill, skillIndex) => (
                  <div 
                    key={skillIndex} 
                    className="skill-item"
                    style={{
                      '--skill-color': category.color,
                      animationDelay: `${(index * 0.1) + (skillIndex * 0.05)}s`
                    }}
                  >
                    <span className="skill-name">{skill}</span>
                    <div className="skill-indicator">
                      <div className="skill-dot"></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="skills-summary animate-fade-in-up">
          <div className="summary-card">
            <h3>What I Bring to the Table</h3>
            <div className="summary-grid">
              <div className="summary-item">
                <div className="summary-number">5+</div>
                <div className="summary-label">Technologies</div>
              </div>
              <div className="summary-item">
                <div className="summary-number">3+</div>
                <div className="summary-label">Major Projects</div>
              </div>
              <div className="summary-item">
                <div className="summary-number">2+</div>
                <div className="summary-label">Years Learning</div>
              </div>
              <div className="summary-item">
                <div className="summary-number">∞</div>
                <div className="summary-label">Passion for Growth</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;