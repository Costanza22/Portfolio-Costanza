import React from 'react';
import './Links.css';
import cv from '../assets/Curriculo Costanza Assef (1).pdf';

const Links = () => {
  const socialLinks = [
    {
      name: "GitHub",
      url: "https://github.com/Costanza22",
      icon: "📁",
      description: "Repositórios e projetos de código"
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/costanzaassef/",
      icon: "💼",
      description: "Perfil profissional e networking"
    },
    {
      name: "Medium",
      url: "https://medium.com/@costanza22",
      icon: "✍️",
      description: "Artigos sobre tecnologia e desenvolvimento"
    }
  ];

  const articles = [
    {
      title: "Desenvolvimento Web com React",
      url: "https://medium.com/@costanza22",
      description: "Artigos sobre desenvolvimento frontend e React"
    },
    {
      title: "Inteligência Artificial e Machine Learning",
      url: "https://medium.com/@costanza22",
      description: "Conteúdo sobre IA, Python e ciência de dados"
    },
    {
      title: "Carreira em Tecnologia",
      url: "https://medium.com/@costanza22",
      description: "Dicas e experiências na área de TI"
    }
  ];

  const handleDownloadCV = () => {
    const link = document.createElement('a');
    link.href = cv;
    link.download = 'CV-Costanza-Assef.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="links" className="links">
      <div className="container">
        <h2 className="section-title">Links & Contato</h2>
        
        <div className="links-content">
          <div className="social-links">
            <h3>Redes Sociais</h3>
            <div className="links-grid">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.url}
                  className="link-card"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="link-icon">{link.icon}</div>
                  <div className="link-info">
                    <h4>{link.name}</h4>
                    <p>{link.description}</p>
                  </div>
                  <span className="link-arrow">→</span>
                </a>
              ))}
            </div>
          </div>

          <div className="articles-section">
            <h3>Artigos no Medium</h3>
            <p className="articles-intro">
              Compartilho conhecimento e experiências através de artigos sobre tecnologia, 
              desenvolvimento e carreira em TI. Acesse meu perfil para ler os conteúdos completos!
            </p>
            <div className="articles-grid">
              {articles.map((article, index) => (
                <a
                  key={index}
                  href={article.url}
                  className="article-card"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="article-icon">📚</div>
                  <div className="article-info">
                    <h4>{article.title}</h4>
                    <p>{article.description}</p>
                  </div>
                  <span className="article-arrow">→</span>
                </a>
              ))}
            </div>
            <div className="medium-cta">
              <a 
                href="https://medium.com/@costanza22"
                className="cta-button"
                target="_blank"
                rel="noopener noreferrer"
              >
                Ver Todos os Artigos no Medium
              </a>
            </div>
          </div>

          <div className="contact-info">
            <h3>Informações de Contato</h3>
            <div className="contact-details">
              <div className="contact-item">
                <span className="contact-icon">📧</span>
                <div>
                  <h4>Email</h4>
                  <p>pinassef22@gmail.com</p>
                </div>
              </div>
              <div className="contact-item">
                <span className="contact-icon">📱</span>
                <div>
                  <h4>WhatsApp</h4>
                  <p>(47) 98804-1237</p>
                </div>
              </div>
              <div className="contact-item">
                <span className="contact-icon">📍</span>
                <div>
                  <h4>Localização</h4>
                  <p>Curitiba, Paraná - Brasil</p>
                </div>
              </div>
            </div>
            
            <div className="cv-download">
              <h4>📄 Currículo</h4>
              <p>Baixe meu currículo em PDF para conhecer melhor minha experiência e formação</p>
              <button onClick={handleDownloadCV} className="cv-button">
                📥 Baixar CV
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Links;
