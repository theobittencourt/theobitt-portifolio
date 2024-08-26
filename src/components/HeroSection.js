import React, { useEffect } from "react";
import { gsap } from "gsap";
import "./HeroSection.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { icons } from "./icons";

// Registrar o efeito 'reveal'
gsap.registerEffect({
  name: "reveal",
  effect: (targets, config) => {
    return gsap.fromTo(
      targets,
      { x: config.x, y: config.y, autoAlpha: 0 },
      { x: 0, y: 0, autoAlpha: 1, duration: config.duration }
    );
  },
  defaults: { duration: 2, x: 0, y: 0 },
  extendTimeline: true,
  scrub: 1.5
});

const HeroSection = () => {
  useEffect(() => {
    const tl = gsap.timeline();
    
    tl.reveal(".hero-section img", { y: "-=10", opacity: 1 }, 0.5)
      .reveal(".hero-section h1", { x: "-=10" }, 0.5)
      .reveal(".hero-section p", { y: "-=10" }, 0.5)
      .reveal(".cta-container", { y: "-=10", opacity: 1 }, 0.5);
  }, []);

  return (
    <section id="home" className="hero-section">
      <img
        src={require("../assets/img/pp.jfif")}
        alt="Theo Bittencourt"
        className="profile-image"
        title="Theo Bittencourt"
      />
      <h1>Hi, I'm <strong className="color-text">Theo Bittencourt!</strong></h1>
      <p><strong className="color-text">
        Jr Software Developer 
        </strong>
        {" "} at Alterdata Software</p>
      <p>Welcome to my portfolio!</p>
      <div className="cta-container">
      I want to <span className="cta-text">hire you!</span>
        <button onClick={(e) => window.open('https://www.linkedin.com/in/theobittencourt/')} alt="I want to hire you!" className="cta-button-hero">
          <FontAwesomeIcon icon={icons.arrowRight} />
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
