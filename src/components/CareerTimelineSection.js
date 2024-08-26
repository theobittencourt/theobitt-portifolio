import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import './CareerTimelineSection.css';

gsap.registerPlugin(ScrollTrigger);

const CareerTimelineSection = () => {
  useEffect(() => {
    // Definindo animações com GSAP e ScrollTrigger
    gsap.fromTo(
      '.timeline-title',
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1.5 }
    );

    gsap.fromTo(
      '.timeline-year',
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        stagger: 0.3,
        scrollTrigger: {
          trigger: '.timeline-section',
          start: 'top 80%',
          end: 'bottom top',
          scrub: 1,
        },
      }
    );
  }, []);
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
      defaults: { duration: 4, x: 0, y: 0 }, // Configurações padrão
      extendTimeline: true, // Permite usar o efeito diretamente em uma timeline
    });
    // Timeline para animações
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".timeline-title",
        start: "top center",
        end: "bottom center",
        scrub: 1.5,
      },
    });
    // Animações
    tl.reveal(".timeline-section", { opacity: 1, stagger: 0.5 });
    tl.reveal(".timeline-title", { x: "-=10", opacity: 0, stagger: 0.5 })
    tl.reveal(".years-container", { x: "-=10", opacity: 0, stagger: 0.5 })
    tl.reveal(".timeline-year", { x: "-=10", opacity: 0, stagger: 0.5 })
}, []);

  return (
    <section id="career-timeline" className="timeline-section">
      <div className="timeline-container">
        <h2 className="timeline-title">My Envisioned Career Timeline at Buzzvel</h2>
        <div className="years-container">
          <div className="timeline-year">
            <h3>2024: My fresh start at Buzzvel</h3>
            <div className="timeline-content">
              <h4>Onboarding and Integration</h4>
              <ul>
                <li><strong>Understand Buzzvel’s Environment:</strong> Immerse yourself in Buzzvel’s processes, tools, and team dynamics.</li>
                <li><strong>Collaborate Actively:</strong> Engage with team members to grasp workflows and project expectations.</li>
              </ul>
              <h4>Learning and Contribution</h4>
              <ul>
                <li><strong>Work with a Mentor:</strong> Partner with a senior developer to accelerate learning and adapt to Buzzvel’s coding standards.</li>
                <li><strong>Start Small, Think Big:</strong> Take on initial tasks and projects, gradually contributing more as your understanding deepens.</li>
              </ul>
              <h4>Feedback and Growth</h4>
              <ul>
                <li><strong>Seek and Apply Feedback:</strong> Regularly review your work with peers and mentors to identify areas for improvement.</li>
                <li><strong>Participate in Team Activities:</strong> Join team meetings and discussions to align with Buzzvel’s goals and build strong working relationships.</li>
              </ul>
            </div>
          </div>
          <div className="timeline-year">
            <h3>2025-2027: Growth & Responsibility</h3>
            <ul>
              <li><strong>Project Ownership:</strong> Lead small to medium projects.</li>
              <li><strong>Skill Development:</strong> Master advanced concepts and new technologies relevant to Buzzvel’s stack.</li>
              <li><strong>Mentorship:</strong> Begin mentoring junior developers.</li>
            </ul>
          </div>
          <div className="timeline-year">
            <h3>2027-2029: Leadership & Innovation</h3>
            <ul>
              <li><strong>Leadership Role:</strong> Potentially step into a team lead or senior developer role.</li>
              <li><strong>Innovation:</strong> Contribute to the strategic direction of front-end development.</li>
              <li><strong>Continuous Learning:</strong> Stay updated with industry trends and apply them at Buzzvel.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CareerTimelineSection;
