import React from 'react';
import './Footer.css';

const Footer = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-main">
            <div className="footer-info">
              <h3>Costanza Assef</h3>
              <p>
                Desenvolvedora Full Stack apaixonada por tecnologia e inovação. 
                Especialista em React, Python e Inteligência Artificial.
              </p>
              <div className="footer-contact">
                <p>📧 pinassef22@gmail.com</p>
                <p>📱 (47) 98804-1237</p>
                <p>📍 Curitiba, Paraná - Brasil</p>
              </div>
            </div>
            
            <div className="footer-links">
              <h4>Navegação</h4>
              <ul>
                <li><button onClick={() => scrollToSection('about')}>Home</button></li>
                <li><button onClick={() => scrollToSection('courses')}>O que faço</button></li>
                <li><button onClick={() => scrollToSection('projects')}>Portfólio</button></li>
                <li><button onClick={() => scrollToSection('certificates')}>Eventos</button></li>
                <li><button onClick={() => scrollToSection('links')}>Contato</button></li>
              </ul>
            </div>
            
            <div className="footer-social">
              <h4>Redes Sociais</h4>
              <ul>
                <li>
                  <a 
                    href="https://github.com/Costanza22" 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    📁 GitHub
                  </a>
                </li>
                <li>
                  <a 
                    href="https://www.linkedin.com/in/costanzaassef/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    💼 LinkedIn
                  </a>
                </li>
                <li>
                  <a 
                    href="https://medium.com/@costanza22" 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    ✍️ Medium
                  </a>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="footer-bottom">
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
