import React from "react";
import "../styles/experience.css";

// Sample data for experiences and services
const experiences = [
  {
    company: "Newpious Synergies Pvt. Ltd.",
    position: "Manager",
    duration: "2018 - Present",
    logo: "https://newpious.com/wp-content/uploads/2023/04/cropped-logo_211__1_-removebg-preview-1-120x57.png",
    description: "Responsible for managing projects and teams across various product initiatives at Newpious Synergies, ensuring timely deliveries and client satisfaction.",
  },
  {
    company: "Drishya Media",
    position: "Affiliate Account Manager",
    duration: "2017 - Present",
    logo: "https://i.ibb.co/tpCmBvzS/Screenshot-2025-02-02-110053-removebg-preview.png",
    description: "Oversee affiliate marketing campaigns, build relationships with clients, and optimize strategies for better performance and ROI.",
  },
 
];

const services = [
  { name: "Google Ads", projectCount: 200 },
  { name: "Email Marketing", projectCount: 50 },
  { name: "Performance Marketing", projectCount: 30 },
  { name: "SEO & SEM", projectCount: 80 },
  { name: "Content Strategy", projectCount: 35 },
  { name: "Analytics & Reporting", projectCount: 50 },
];

const Experience = () => {
  return (
    <section id="exp" className="experience-section">
      <h2 className="experience-title">Experience</h2>

      {/* Company Cards */}
      <div className="timeline">
        {experiences.map((exp, index) => (
          <div key={index} className="timeline-item">
            <div className="timeline-content">
              
              <div className="logoname">
              <img src={exp.logo} alt={`${exp.company} logo`} className="company-logo" />
              <h3 className="company">{exp.company}</h3>
              </div>

              <p className="position">{exp.position}</p>
              <span className="duration">{exp.duration}</span>
              <p className="description">{exp.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Service Cards for Card 3 */}
      <div className="service-card-container">
        {services.map((service, index) => (
          <div key={index} className="service-card">
            <h4>{service.name}</h4>
            <p className="project-count">
              {service.projectCount}+<br />
              <span>Projects</span>
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
