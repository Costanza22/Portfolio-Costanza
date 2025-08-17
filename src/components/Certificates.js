import React from 'react';
import './Certificates.css';
import codecon1 from '../assets/codecon 1.jpg';
import codecon2 from '../assets/codecon 2.jpg';
import codecon3 from '../assets/codecon 3.jpg';
import codecon4 from '../assets/codecon 4.jpg';
import codecon5 from '../assets/codecon 5.jpg';
import summitIa1 from '../assets/summit ia 1.jpg';
import summitIa2 from '../assets/summit ia 2.jpg';
import summitIa3 from '../assets/summit ia 3.jpg';
import summitIa4 from '../assets/summit ia 4.jpg';

const Certificates = () => {
  const certificates = [
    {
      id: 1,
      title: "Summit de I.A. 2025",
      issuer: "Evento de Inteligência Artificial",
      date: "2025",
      image: "🤖",
      description: "Participação no principal evento de IA do ano, com palestras e networking.",
      link: "#",
      hasImage: true,
      images: [summitIa1, summitIa2, summitIa3, summitIa4]
    },
    {
      id: 2,
      title: "Codecon Summit 25",
      issuer: "Evento de Desenvolvimento",
      date: "2025",
      image: "💻",
      description: "Participação no maior evento de desenvolvedores do Brasil.",
      link: "#",
      hasImage: true,
      images: [codecon1, codecon2, codecon3, codecon4, codecon5]
    },
    {
      id: 3,
      title: "RecrutaTech Curitiba",
      issuer: "Evento de Recrutamento Tech",
      date: "2025",
      image: "👥",
      description: "Participação no evento de recrutamento e networking para profissionais de tecnologia em Curitiba.",
      link: "#",
      hasImage: true
    },
    {
      id: 4,
      title: "Codecon Summit 24",
      issuer: "Evento de Desenvolvimento",
      date: "2024",
      image: "🚀",
      description: "Participação no evento de desenvolvedores com foco em inovação e tecnologia.",
      link: "#"
    },
    {
      id: 5,
      title: "Hackathon 2021 - Soluções Criativas",
      issuer: "Evento de Inovação",
      date: "2021",
      image: "🏆",
      description: "Participação em hackathon desenvolvendo soluções criativas e colaborativas para desafios reais.",
      link: "#"
    },
    {
      id: 6,
      title: "Pós-graduação em Inteligência Artificial",
      issuer: "UFPR",
      date: "2024 - Em andamento",
      image: "🎓",
      description: "Aprovada na pós-graduação em IA, expandindo atuação para automação e ciência de dados.",
      link: "#"
    }
  ];

  return (
    <section id="certificates" className="certificates">
      <div className="container">
        <h2 className="section-title">Conquistas & Eventos</h2>
        
        <div className="certificates-grid">
          {certificates.map((cert) => (
            <div key={cert.id} className="certificate-card">
              <div className="certificate-image">
                <span className="cert-icon">{cert.image}</span>
                {cert.hasImage && cert.images ? (
                  <div className="images-gallery">
                    {cert.images.map((img, index) => (
                      <img 
                        key={index}
                        src={img} 
                        alt={`${cert.title} - Imagem ${index + 1}`}
                        className="event-image"
                      />
                    ))}
                  </div>
                ) : cert.hasImage && (
                  <div className="image-placeholder">
                    <span>📸</span>
                    <p>Imagem futura</p>
                  </div>
                )}
              </div>
              
              <div className="certificate-content">
                <h3 className="certificate-title">{cert.title}</h3>
                <p className="certificate-issuer">{cert.issuer}</p>
                <p className="certificate-date">{cert.date}</p>
                <p className="certificate-description">{cert.description}</p>
                
                <a 
                  href={cert.link} 
                  className="certificate-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Ver Detalhes →
                </a>
              </div>
            </div>
          ))}
        </div>
        
        <div className="certificates-stats">
          <div className="stat-item">
            <span className="stat-number">{certificates.length}</span>
            <span className="stat-label">Conquistas</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">3</span>
            <span className="stat-label">Idiomas</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">2025</span>
            <span className="stat-label">Ano Ativo</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certificates;
