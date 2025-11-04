import React from "react";
import profilePic from "./assets/naresh.jpg";
import "./Hero.css";

const Hero = () => (
  <section id="hero" className="hero-section">
    <div className="container">
      <div className="hero-content" role="region" aria-label="Introduction">
        <img
          src={profilePic}
          alt="Naresh Bandaru — Web Developer"
          className="profile-pic"
          loading="lazy"
        />
        <h2>Hi, I'm Naresh Bandaru!</h2>
        <p>
          A passionate Web Developer specializing in web applications,
          designing user-friendly interfaces, and crafting engaging content. I
          love solving problems and building things that make a difference.
        </p>

        <div className="hero-cta">
          <a href="#projects" className="btn" aria-label="View my work">
            View My Work
          </a>
          <a href="#contact" className="btn btn-outline" aria-label="Contact or download resume">
            Contact / Resume
          </a>
        </div>

        <div className="social-links" aria-hidden="false">
          <a
            href="https://github.com/nareshbandaru1466"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            🐙 GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/nareshbandaru"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            💼 LinkedIn
          </a>
          <a href="mailto:nareshbandaru1466@gmail.com" aria-label="Email">
            ✉️ Email
          </a>
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=nareshbandaru1466@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
           
            aria-label="Compose in Gmail"
          >
            ✉️ Compose in Gmail
          </a>
        </div>
      </div>
    </div>
  </section>
);

export default Hero;
    </div>
  </section>
);

export default Hero;
