import React from 'react';
import './About.css';

const About = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        <h2 className="section-title">Sobre Mim</h2>
        
        <div className="about-content">
          <div className="about-text">
            <h3>Quem sou eu?</h3>
            <p>
              Sou apaixonada por tecnologia, inovação e aprendizado constante. Atuo com foco em desenvolvimento web, 
              com experiência prática em Python, JavaScript, React, Angular e muito mais. 
              Especialista em Inteligência Artificial e análise de dados.
            </p>
            
            <p>
              Em 2021, participei de um Hackathon, desenvolvendo soluções criativas e colaborativas para desafios reais — 
              reforçando meu espírito inovador e paixão por trabalhar em equipe.
            </p>

            <div className="experience-section">
              <h3>Experiência Profissional</h3>
              
              <div className="experience-item">
                <div className="experience-header">
                  <h4>Desenvolvedor Web Júnior</h4>
                  <span className="company">Amazon · Freelance</span>
                </div>
                <div className="experience-details">
                  <span className="period">Abril 2025 - Atual</span>
                  <span className="location">Remota</span>
                </div>
                <ul className="experience-responsibilities">
                  <li>Criação de aplicações com React</li>
                  <li>Estilização com Tailwind CSS</li>
                  <li>Hospedagem de aplicações front-end utilizando AWS S3</li>
                  <li>Integração com APIs RESTful e consumo de dados dinâmico</li>
                  <li>Correção de bugs básicos</li>
                </ul>
              </div>

              <div className="experience-item">
                <div className="experience-header">
                  <h4>Analista de Suporte de TI Junior</h4>
                  <span className="company">Schulze Advogados Associados</span>
                </div>
                <div className="experience-details">
                  <span className="period">Novembro 2024 - Abril 2025</span>
                  <span className="location">Joinville, Santa Catarina</span>
                </div>
                <ul className="experience-responsibilities">
                  <li>Instalação de impressoras</li>
                  <li>Manutenção de computadores</li>
                  <li>Suporte técnico aos usuários</li>
                </ul>
              </div>

              <div className="experience-item">
                <div className="experience-header">
                  <h4>Estagiária de Inteligência de Mercado</h4>
                  <span className="company">WEG</span>
                </div>
                <div className="experience-details">
                  <span className="period">Março 2024 - Agosto 2024</span>
                  <span className="location">Jaraguá do Sul, Santa Catarina</span>
                </div>
                <ul className="experience-responsibilities">
                  <li>Criação de dashboards com Tableau</li>
                  <li>Campos Calculados</li>
                  <li>Análise de dados de mercado</li>
                </ul>
              </div>
            </div>

            <h3>Minhas Habilidades</h3>
            <div className="skills-grid">
              <div className="skill-category">
                <h4>Linguagens & Tecnologias</h4>
                <ul>
                  <li>Python</li>
                  <li>JavaScript</li>
                  <li>MySQL</li>
                  <li>HTML & CSS</li>
                </ul>
              </div>
              
              <div className="skill-category">
                <h4>Frameworks & Bibliotecas</h4>
                <ul>
                  <li>React</li>
                  <li>Angular</li>
                  <li>Bootstrap</li>
                  <li>TailwindCSS</li>
                </ul>
              </div>
              
              <div className="skill-category">
                <h4>Especialidades</h4>
                <ul>
                  <li>Inteligência Artificial</li>
                  <li>Análise de Dados</li>
                  <li>Desenvolvimento Web</li>
                  <li>Suporte de TI</li>
                </ul>
              </div>
            </div>

            <h3>Idiomas</h3>
            <div className="languages">
              <span className="language-tag">🇺🇸 Inglês - Fluente</span>
              <span className="language-tag">🇩🇪 Alemão - Fluente</span>
              <span className="language-tag">🇧🇷 Português - Nativo</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
