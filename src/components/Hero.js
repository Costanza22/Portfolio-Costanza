import React from 'react';
import './Hero.css';
import costanzaPhoto from '../assets/costanza perfil.jpg';

const Hero = () => {
  const scrollToAbout = () => {
    const element = document.getElementById('about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <h1 className="hero-title">
            <span className="highlight">Engenheira</span> de Software
          </h1>
          <p className="hero-description">
            Sou apaixonada por tecnologia, inovação e aprendizado constante. Atuo com foco em desenvolvimento web, 
            com experiência prática em Python, JavaScript, React, Angular e muito mais. 
            Especialista em Inteligência Artificial e análise de dados.
          </p>
          <button className="cta-button" onClick={scrollToAbout}>
            SOBRE MIM
          </button>
        </div>
        
        <div className="hero-visual">
          <div className="hero-avatar">
            <img 
              src={costanzaPhoto} 
              alt="Costanza Assef" 
              className="avatar-image"
            />
          </div>
        </div>
      </div>
      
      <div className="network-pattern"></div>
      <div className="vr-element"></div>
    </section>
  );
};

export default Hero;
