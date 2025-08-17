import React, { useState } from 'react';
import './Projects.css';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const projectsData = [
    {
      id: 1,
      title: "Air France - Previsão de demanda aérea",
      description: "Projeto de IA voltado para previsão de fluxo de passageiros em rotas da Air France, utilizando técnicas de machine learning com Python, Pandas, Scikit-learn e visualizações com Matplotlib.",
      image: "✈️",
      technologies: ["Python", "Pandas", "Scikit-learn", "Matplotlib", "Machine Learning"],
      category: "ai",
      github: "https://github.com/Costanza22/Air-France",
      live: "https://github.com/Costanza22/Air-France",
      featured: true
    },
    {
      id: 2,
      title: "ChatIA Vet",
      description: "Um chatbot inteligente para veterinárias, feito com modelos de NLP em Python. Ele responde dúvidas sobre cuidados, raças, vacinas e muito mais — projetado para clínicas e tutores.",
      image: "🐶",
      technologies: ["Python", "NLP", "Chatbot", "Machine Learning", "Veterinária"],
      category: "ai",
      github: "https://github.com/Costanza22/ChatIA-Vet",
      live: "https://github.com/Costanza22/ChatIA-Vet"
    },
    {
      id: 3,
      title: "Joi Patrio",
      description: "Plataforma desenvolvida para valorização e preservação do patrimônio histórico. Front-end em React, com foco em acessibilidade, mapeamento interativo e banco de dados georreferenciado.",
      image: "🏛️",
      technologies: ["React", "JavaScript", "HTML", "CSS", "Patrimônio Histórico"],
      category: "frontend",
      github: "https://github.com/Costanza22/Patrim-nio-Hist-rico-de-Joinville",
      live: "https://github.com/Costanza22/Patrim-nio-Hist-rico-de-Joinville"
    },
    {
      id: 4,
      title: "Aero-Course",
      description: "Plataforma educacional interativa e moderna para o ensino de aeronáutica, desenvolvida em React com recursos avançados de simulação, realidade aumentada e aprendizado interativo.",
      image: "🛩️",
      technologies: ["React", "JavaScript", "CSS3", "HTML5"],
      category: "frontend",
      github: "https://github.com/Costanza22/Aero-Course",
      live: "https://aero-course-nu.vercel.app"
    },
    {
      id: 5,
      title: "Arch-Connect",
      description: "Sistema completo de gerenciamento de reforma para casa da praia, incluindo controle de materiais, móveis, orçamentos e projetos. Desenvolvido em React com Material-UI.",
      image: "🏠",
      technologies: ["React 19", "Material-UI", "JavaScript", "Context API", "LocalStorage"],
      category: "frontend",
      github: "https://github.com/Costanza22/Arch-Connect",
      live: "https://arch-connect-beryl.vercel.app"
    },
    {
      id: 6,
      title: "Farm-Day",
      description: "Plataforma web moderna para agricultura inteligente, oferecendo recursos educativos, monitoramento de cultivos 3D, ferramentas de gestão agrícola e biblioteca digital especializada.",
      image: "🌾",
      technologies: ["React.js", "Three.js", "Framer Motion", "Tailwind CSS", "EmailJS"],
      category: "frontend",
      github: "https://github.com/Costanza22/Farm-Day",
      live: "https://farm-day.vercel.app"
    }
  ];

  const filters = [
    { id: 'all', label: 'Todos' },
    { id: 'frontend', label: 'Frontend' },
    { id: 'backend', label: 'Backend' },
    { id: 'ai', label: 'IA & ML' },
    { id: 'fullstack', label: 'Full Stack' }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projectsData 
    : projectsData.filter(project => project.category === activeFilter);

  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2 className="section-title">Meus Projetos</h2>
        
        <div className="projects-filters">
          {filters.map(filter => (
            <button
              key={filter.id}
              className={`filter-btn ${activeFilter === filter.id ? 'active' : ''}`}
              onClick={() => setActiveFilter(filter.id)}
            >
              {filter.label}
            </button>
          ))}
        </div>

        <div className="projects-grid">
          {filteredProjects.map((project) => (
            <div key={project.id} className={`project-card ${project.featured ? 'featured' : ''}`}>
              {project.featured && <span className="featured-badge">⭐ Destaque</span>}
              
              <div className="project-image">
                <span className="project-icon">{project.image}</span>
              </div>
              
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                
                <div className="project-technologies">
                  {project.technologies.map((tech, index) => (
                    <span key={index} className="tech-tag">{tech}</span>
                  ))}
                </div>
                
                <div className="project-links">
                  <a 
                    href={project.github} 
                    className="project-link github"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span>📁</span> Código
                  </a>
                  <a 
                    href={project.live} 
                    className="project-link live"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span>🌐</span> Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="projects-cta">
          <p>Quer ver mais projetos ou colaborar em algo?</p>
          <a 
            href="https://github.com/Costanza22" 
            className="cta-button"
            target="_blank"
            rel="noopener noreferrer"
          >
            Ver no GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
