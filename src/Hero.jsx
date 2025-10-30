import React from "react";

const Hero = () => (
  <section id="hero" className="hero-section">
    <div className="container">
      <div className="hero-content">
        <img
          src="../../../../naresh bandaru.JPG"
          alt="Your Profile"
          className="profile-pic"
        />
        <h2>Hi, I'm Naresh Bandaru!</h2>
        <p>
          A passionate Web Developer and I specialize in web applications,
          designing user-friendly interfaces, crafting engaging content. I love
          solving problems and building things that make a difference.
        </p>
        <a href="#projects" className="btn">
          View My Work
        </a>
      </div>
    </div>
  </section>
);

export default Hero;
