import React from 'react';
import { GraduationCap, Calendar, MapPin, Award } from 'lucide-react';
import './Education.css';

const Education = () => {
  const educationData = [
    {
      DEGREE: "B.Tech Information Technology",
      INSTITUTION: "Thiagarajar College of Engineering",
      LOCATION: "Madurai, Tamil Nadu",
      DURATION: "Nov 2021 - Apr 2025",
      CGPA: "6.72 (out of 10)",
      STATUS: "Completed",
      DESCRIPTION: "Completed my Bachelor's degree in Information Technology with focus on software development, web technologies, and data structures."
    },
    {
      DEGREE: "Higher Secondary Education",
      INSTITUTION: "Mount Zion International School (CBSE)",
      LOCATION: "Pudukkottai, Tamil Nadu",
      DURATION: "2020 - 2021",
      PERCENTAGE: "88.8%",
      STATUS: "Completed",
      DESCRIPTION: "Completed higher secondary education with strong performance in Mathematics and Computer Science."
    },
    {
      DEGREE: "Secondary Education",
      INSTITUTION: "Mount Zion International School (CBSE)",
      LOCATION: "Pudukkottai, Tamil Nadu",
      DURATION: "2018 - 2019",
      PERCENTAGE: "91.6%",
      STATUS: "Completed",
      DESCRIPTION: "Completed secondary education with excellent academic performance across all subjects."
    }
  ];

  return (
    <section id="education" className="education">
      <div className="container">
        <div className="section-header">
          <h2 className="animate-fade-in-up">Education</h2>
          <p className="section-subtitle animate-fade-in-up">
            My academic journey and achievements
          </p>
        </div>

        <div className="education-timeline">
          {educationData.map((edu, index) => (
            <div key={index} className={`timeline-item animate-fade-in-up`} style={{animationDelay: `${index * 0.2}s`}}>
              <div className="timeline-marker">
                <GraduationCap size={20} />
              </div>
              
              <div className="timeline-content">
                <div className="education-card">
                  <div className="card-header">
                    <div className="degree-info">
                      <h3>{edu.DEGREE}</h3>
                      <h4>{edu.INSTITUTION}</h4>
                    </div>
                    <div className={`status-badge ${edu.STATUS.toLowerCase()}`}>
                      {edu.STATUS}
                    </div>
                  </div>

                  <div className="card-body">
                    <div className="education-details">
                      <div className="detail-item">
                        <MapPin size={16} />
                        <span>{edu.LOCATION}</span>
                      </div>
                      <div className="detail-item">
                        <Calendar size={16} />
                        <span>{edu.DURATION}</span>
                      </div>
                      <div className="detail-item">
                        <Award size={16} />
                        <span>{edu.CGPA}</span>
                      </div>
                    </div>

                    <p className="education-description">
                      {edu.DESCRIPTION}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;