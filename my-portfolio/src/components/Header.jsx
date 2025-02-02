import React, { useState } from "react";
import "../styles/header.css";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="header">
      {/* Left: Client Logo */}
      <div className="logo">
        <div className="flag-container">
          <div className="flag">
            Portfolio
          </div>
        </div>
      </div>

      {/* Center: Famous Quote and Navigation Buttons */}
      <div className="quote-container">
        <a href="#service" className="btn">My Services</a>
        <a href="#exp" className="btn">Experience</a>
        <a href="#contact-container" className="btn">Contact</a>
        <a href="#skills" className="btn">Skills</a>
      </div>

      {/* Right: Start Collaboration Button */}
      <div className="collaboration-btn">
        <a href="#collaboration" className="btn">Start Collaboration</a>
      </div>
    </header>
  );
};

export default Header;
