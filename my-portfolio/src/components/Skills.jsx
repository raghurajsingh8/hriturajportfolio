import React from "react";
import "../styles/skills.css";

const skills = [
  "Digital Marketing",
  "Email Marketing",
  "Google Ads",
  "Business Development",
  "PPC",
  "Social Media Marketing",
  "SEO Optimization",
  "Content Strategy",
  "Market Analysis",
  "Lead Generation",
];

const Skills = () => {
  return (
    <section id='skills' className="skills-section">
      <h2 className="skills-title">Skills</h2>
      <div className="skills-container">
        {skills.map((skill, index) => (
          <div key={index} className="skill-badge">
            {skill}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
