import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Navbar from './components/Navbar';
import AboutMeSection from './components/AboutMeSection';
import HeroSection from './components/HeroSection';
import CareerTimelineSection from './components/CareerTimelineSection';
import WhyBuzzvel from './components/WhyBuzzvel';
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    
    gsap.registerPlugin(ScrollTrigger);
    const slideInNextSection = (trigger, nextSection) => {
      gsap.fromTo(
        nextSection,
        { x: '-20%', opacity: 0 }, // Começa fora da tela, à direita
        {
          x: '0%', // Desliza até sua posição original
          opacity: 1,
          duration: 3.5, // Tempo da animação de slide-in
          ease: "power3.out", // Animação suave
          scrollTrigger: {
            trigger: trigger,
            start: "bottom center-=100", // Inicia um pouco antes do centro
            end: "bottom top", // Termina a animação antes que a seção anterior saia da tela
            scrub: 0.5, // Suaviza a transição ao rolar
          },
        }
      );
    };
    //Tried this, but using only the slideInNext worked for me.

    // const slideOutPreviousSection = (trigger, prevSection) => {
    //   gsap.to(prevSection, {
    //     x: 0, 
    //     opacity: 0,
    //     duration: 1.5, 
    //     ease: "power3.in", 
    //     scrollTrigger: {
    //       trigger: trigger,
    //       start: "top center", 
    //       end: "top top+=100",
    //       scrub: 1,
    //     },
    //   });
    // };

    slideInNextSection(".hero-section", ".about-me");
    slideInNextSection("#home", "#career-timeline");
    slideInNextSection("#career-timeline", "#why-buzzvel");
  }, []);

  return (
    <div className="App">
      <Navbar className="navbar" />
      <HeroSection />
      <AboutMeSection />
      <CareerTimelineSection  />
      <WhyBuzzvel  />
      <Footer />
    </div>
  );
}

export default App;
