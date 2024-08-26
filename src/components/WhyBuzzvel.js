import React, { useEffect } from "react";
import { gsap } from "gsap";
import "./WhyBuzzvel.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { icons } from "./icons";

const WhyBuzzvel = () => {
  useEffect(() => {
    gsap.registerEffect({
      name: "reveal",
      effect: (targets, config) => {
        return gsap.fromTo(
          targets,
          { x: config.x, y: config.y, autoAlpha: 0 },
          { x: 0, y: 0, autoAlpha: 1, duration: config.duration }
        );
      },
      defaults: { duration: 2.5, x: 0, y: 0 },
      extendTimeline: true,
    });

    // Timeline para animações
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".title-items",
        start: "top center",
        end: "bottom center",
        scrub: 1.5,
      },
    });

    // Animações
    tl.reveal(".buzzvel-container", { x: "-=10", opacity: 0, stagger: 0.5 })
      .reveal(".title-items", { x: "-=10", opacity: 0, stagger: 0.5 })
      .reveal(".cards-section", { x: "-=10", opacity: 0, stagger: 0.5 })
      .reveal(".card-item", { x: "-=10", opacity: 0, stagger: 0.5 });
  }, []);

  return (
    <section id="why-buzzvel" className="buzzvel-section">
      <h2 className="title-items">Solutions by Buzzvel</h2>
      <div className="cards-section">
        <ul>
          <li>
            <div className="card-item">
              <img
                title="DBS"
                alt="DBS"
                src="https://buzzvel.com/storage/conversions/182/conversions/Img1-normal.webp"
              />
              <h2>DBS</h2>
              <strong>Health</strong>
              <p>
                We built this platform and App that allowed primary users to
                track medical tests.
              </p>
              <button
                onClick={(e) =>
                  window.open("https://buzzvel.com/portfolio/dbs")
                }
                alt="DBS"
                className="cta-button"
              >
                <FontAwesomeIcon icon={icons.arrowRight} />
              </button>
            </div>
          </li>
          <li>
            <div className="card-item">
              <img
                title="Traquinices"
                alt="Traquinices"
                src="https://buzzvel.com/storage/conversions/297/conversions/Img1-(1)-normal.webp"
              />
              <h2>Traquinices</h2>
              <strong>Retail</strong>
              <p>
                Traquinices is a company that was born in Portugal in 1996. It
                specializes in the distribution of premium Childcare products to
                provide the best satisfaction to customers.
              </p>
              <button
                onClick={(e) =>
                  window.open("https://buzzvel.com/portfolio/traquinices")
                }
                alt="Traquinices"
                className="cta-button"
              >
                <FontAwesomeIcon icon={icons.arrowRight} />
              </button>
            </div>
          </li>
          <li>
            <div className="card-item">
              <img
                title="Viplant"
                alt="Viplant"
                src="https://buzzvel.com/storage/conversions/459/conversions/Frame-11990-min-normal.webp"
              />
              <h2>Viplant</h2>
              <strong>E-commerce</strong>
              <p>
                We created a new website for VIPLANT with the main aim of
                enhancing the user experience, extending the quality of the
                physical purchase to the digital environment.
              </p>
              <button
                onClick={(e) =>
                  window.open("https://buzzvel.com/portfolio/viplant")
                }
                alt="Viplant"
                className="cta-button"
              >
                <FontAwesomeIcon icon={icons.arrowRight} />
              </button>
            </div>
          </li>
          <li>
            <div className="card-item">
              <img
                title="Miss Can"
                alt="Miss Can"
                src="https://buzzvel.com/storage/conversions/61/conversions/featured-misscan-normal.webp"
              />
              <h2>Miss Can</h2>
              <strong>E-commerce</strong>
              <p>
                A Portuguese and family project of the canning industry with 3
                generations of history and tradition. Canned food produced in
                Portugal, with Portuguese fish and artisanal.
              </p>
              <button
                onClick={(e) =>
                  window.open("https://buzzvel.com/portfolio/miss-can")
                }
                alt="Miss can"
                className="cta-button"
              >
                <FontAwesomeIcon icon={icons.arrowRight} />
              </button>
            </div>
          </li>
        </ul>
      </div>
      <div className="first-paragraph">
        I'm a 22-year-old Full Stack Developer based in Teresópolis, Brazil,
        with nearly two years of professional experience in .NET Core, ASP.NET
        Web API, and modern front-end frameworks like Vue.js, AngularJS, and
        React. Throughout my journey, I have gained solid expertise in Docker,
        Jenkins, and database management using Postgres SQL and SQL Server. I am
        well-versed in agile methodologies and version control with GIT, always
        striving for clear communication and collaboration within teams.
        <br />
        <br />
        Working for Buzzvel represents more than just a job opportunity; it's a
        chance to immerse myself in an innovative environment where I can
        continue growing both technically and professionally. I've always had a
        passion for front-end development, and since this position focuses on
        front-end, I'm excited to contribute to international projects, learn
        from a global perspective, and embrace the challenges that come with
        working for a foreign company.
        <br />
        <br />
        Besides the valuable experience, the opportunity to receive compensation
        in EUR is another motivating factor that drives my enthusiasm for this
        role. This would enable me to expand my horizons both professionally and
        personally, furthering my career development.
        <br />
        <br />
        My goal is to make a meaningful impact by combining my technical
        expertise with Buzzvel's cutting-edge projects, all while growing and
        contributing to the company's success.
      </div>
    </section>
  );
};

export default WhyBuzzvel;
