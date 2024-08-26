import React, { useEffect } from "react";
import { gsap } from "gsap";
import "./AboutMeSection.css";

const AboutMeSection = () => {
  useEffect(() => {
    gsap.registerEffect({
      name: "reveal",
      effect: (targets, config) => {
        return gsap.fromTo(
          targets,
          { x: config.x, y: config.y, autoAlpha: 0 },
          { x: 0, y: 0, autoAlpha: 1, duration: 5 }
        );
      },
      defaults: { duration: 5, x: 0, y: 0 }, // Configurações padrão
      extendTimeline: true, // Permite usar o efeito diretamente em uma timeline
    });
    // // Cria uma timeline para animações
    // const tl = gsap.timeline();

    // tl.reveal('.title', { x: "-=10", duration: 2 })  // Anima o título
    // .reveal('.experience', { x: "-=10", duration: 1.5 }, "-=0.85") // Anima a seção de experiência com atraso
    // // .reveal('.card', { x: "-=10", duration: 0.9, stagger: 0.8 })  // Anima cada card com cascata
    // Timeline para animações
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".title",
        start: "top center",
        end: "bottom center",
        scrub: 1.5,
      },
    });

    // Animações
    tl.reveal(".about-me", { opacity: 0, stagger: 0.5 });
    tl.reveal(".title", { x: "-=10", opacity: 0, stagger: 0.5 }).reveal(
      ".experience",
      { x: "-=10", opacity: 0, stagger: 0.5 }
    );
    // .reveal(".card", { x: "-=10", opacity: 0, stagger: 0.5 })
    // .reveal(".card strong", { x: "-=10", opacity: 0, stagger: 0.5 })
    // .reveal(".card p", { x: "-=10", opacity: 0, stagger: 0.5 })
  }, []);

  return (
    <section id="about-me" className="about-me">
      <h2 className="title">About me</h2>
      <div className="experience">
        <ul>
          <li>
            <div className="card">
              <strong>PROFESSIONAL EXPERIENCE</strong> <br />
              <strong>Jr Full Stack Developer - Alterdata Software</strong>
              <p>Sep 2022 - Present</p>
              <p>
                At Alterdata, I've worked extensively with .NET Core, ASP.NET,
                and the .NET Framework to build and maintain robust Web APIs.
                <br />
                On the front-end, I've utilized Vue.js, AngularJS, React JS, and
                Mithril JS, along with HTML, CSS, and JavaScript.
                <br />
                I have experience integrating third-party APIs and managing
                databases using NodeJS, ORM, and SQL/No-SQL technologies.
                <br />
                <br />
                One of my notable projects involved developing a system to
                manage the company’s laptops and installed software. I created a
                Windows service that runs on each company device to collect and
                send data to an API.
                <br />
                This data is then visualized on the front-end with charts and
                custom tables for filtering.
                <br />
                <br />
                These experiences have provided me with a solid understanding of
                both back-end and front-end development.
              </p>
            </div>
          </li>
          <li>
            <div className="card">
              <strong>EDUCATION</strong> <br />
              <strong>SENAI SERRATEC Bootcamp Software ICT</strong>
              <p>Mar 2022 - August 2022</p>
              <p>
                5 month long bootcamp where I worked on several projects that
                enhanced my understanding of web and software development,
                focusing on both front-end and back-end technologies.
              </p>
            </div>
          </li>
          <li>
            <div className="card">
              <strong>EDUCATION</strong> <br />
              <strong>UNIFESO University Center Organ Mountains</strong> <br />
              <strong>
                Technologist Degree: Systems Analysis and Development
              </strong>
              <p>Jan 2023 - June 2025</p>
            </div>
          </li>
          <li>
            <div className="card">
              <strong>EDUCATION</strong> <br />
              <strong>Cultura Inglesa Master Certificate</strong> <br />
              <strong>English C1 - Master Certificate</strong>
              <p>Jan 2014 - Dec 2020</p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default AboutMeSection;
