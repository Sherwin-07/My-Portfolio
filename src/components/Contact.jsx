import React, { useState } from 'react';
import { Mail, Phone, MapPin, Github, Linkedin, Send, MessageCircle } from 'lucide-react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    // You can integrate with email service or backend here
    alert('Thank you for your message! I\'ll get back to you soon.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const contactInfo = [
    {
      icon: <Mail size={24} />,
      title: "Email",
      value: "sathishsherwin106@gmail.com",
      link: "mailto:sathishsherwin106@gmail.com",
      color: "#00d4ff"
    },
    {
      icon: <Phone size={24} />,
      title: "Phone",
      value: "+91 82484 61818",
      link: "tel:+918248461818",
      color: "#22c55e"
    },
    {
      icon: <MapPin size={24} />,
      title: "Location",
      value: "Madurai, Tamil Nadu",
      link: "#",
      color: "#f59e0b"
    }
  ];

  return (
    <section id="contact" className="contact">
      <div className="container">
        <div className="section-header">
          <h2 className="animate-fade-in-up">Get In Touch</h2>
          <p className="section-subtitle animate-fade-in-up">
            Let's discuss opportunities and collaborate on exciting projects
          </p>
        </div>

        <div className="contact-content">
          <div className="contact-info animate-fade-in-left">
            <div className="info-card">
              <div className="info-header">
                <MessageCircle size={32} />
                <h3>Let's Connect</h3>
              </div>
              
              <p className="info-description">
                I'm always interested in hearing about new opportunities, 
                whether it's a project collaboration, internship, or just a 
                friendly chat about technology and development.
              </p>

              <div className="contact-methods">
                {contactInfo.map((info, index) => (
                  <a 
                    key={index}
                    href={info.link}
                    className="contact-method"
                    style={{'--method-color': info.color}}
                  >
                    <div className="method-icon" style={{color: info.color}}>
                      {info.icon}
                    </div>
                    <div className="method-content">
                      <h4>{info.title}</h4>
                      <p>{info.value}</p>
                    </div>
                  </a>
                ))}
              </div>

              <div className="social-links">
                <h4>Find me on</h4>
                <div className="social-buttons">
                  <a 
                    href="https://github.com/Sherwin-07" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="social-btn"
                    aria-label="GitHub Profile"
                  >
                    <Github size={20} />
                    <span>GitHub</span>
                  </a>
                  <a 
                    href="mailto:sathishsherwin106@gmail.com"
                    className="social-btn"
                    aria-label="Email"
                  >
                    <Mail size={20} />
                    <span>Email</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="contact-form-container animate-fade-in-right">
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-header">
                <h3>Send me a message</h3>
                <p>I'll get back to you as soon as possible</p>
              </div>

              <div className="form-group">
                <label htmlFor="name">Full Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Your full name"
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email Address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="your.email@example.com"
                />
              </div>

              <div className="form-group">
                <label htmlFor="subject">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  placeholder="What's this about?"
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="6"
                  placeholder="Tell me about your project or just say hello..."
                ></textarea>
              </div>

              <button type="submit" className="btn btn-primary submit-btn">
                <Send size={18} />
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>

      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <p>&copy; 2024 Sherwin Raj S A J. Built with React and passion for great design.</p>
          </div>
        </div>
      </footer>
    </section>
  );
};

export default Contact;