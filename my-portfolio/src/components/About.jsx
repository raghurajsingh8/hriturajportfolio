import React from "react";
import "../styles/about.css";

const About = () => {
  return (
    <section id="service" className="about-section">
      <div className="container">
        {/* Title */}
        <h2 className="about-title">My Services</h2>

        {/* Description */}
        <p className="about-description">
          An experienced <strong>Account Manager</strong> with a demonstrated
          history in marketing and advertising. Specialized in{" "}
          <strong>Google Ads, Email Marketing, and Performance Marketing</strong>.
        </p>

        {/* Skills Section */}
        <div className="skills-grid">
          <div className="skill-card">
            <h3>Google Ads</h3>
            <p>Maximize your ROI with targeted Google Ads campaigns.</p>
          </div>
          <div className="skill-card">
            <h3>Email Marketing</h3>
            <p>Create effective email campaigns to boost engagement and sales.</p>
          </div>
          <div className="skill-card">
            <h3>Performance Marketing</h3>
            <p>Drive results through data-driven performance marketing strategies.</p>
          </div>
          <div className="skill-card">
            <h3>SEO & SEM</h3>
            <p>Optimize your site and ads for better search engine visibility.</p>
          </div>
          <div className="skill-card">
            <h3>Content Strategy</h3>
            <p>Develop compelling content to connect with your audience.</p>
          </div>
          <div className="skill-card">
            <h3>Analytics & Reporting</h3>
            <p>Provide actionable insights with comprehensive analytics and reports.</p>
          </div>
          <div className="skill-card">
            <h3>Social Media Marketing
            </h3>
            <p>Leveraging social platforms to build brand awareness and engagement effectively.</p>
          </div>
          <div className="skill-card">
            <h3>Market Analysis
            </h3>
            <p>Researching market trends and consumer behavior to guide business decisions.</p>
          </div>
          <div className="skill-card">
            <h3>Business Development
            </h3>
            <p>Identifying opportunities, partnerships, and strategies to drive company growth.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
