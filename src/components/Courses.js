import React from 'react';
import './Courses.css';

const Courses = () => {
  const courses = [
    {
      id: 1,
      title: "Pós-graduação em Inteligência Artificial",
      institution: "UFPR",
      duration: "2024 - Em andamento",
      description: "Expansão da atuação para áreas como automação e ciência de dados.",
      skills: ["IA", "Automação", "Ciência de Dados", "Machine Learning"]
    },
    {
      id: 2,
      title: "Engenharia de Software",
      institution: "Universidade",
      duration: "2020 - 2024",
      description: "Formação em engenharia de software com foco em desenvolvimento web e tecnologias modernas.",
      skills: ["Desenvolvimento Web", "Arquitetura de Software", "Banco de Dados", "Metodologias Ágeis"]
    },
    {
      id: 3,
      title: "Introduction to Programming Using Python",
      institution: "Universidade do Estado de Santa Catarina",
      duration: "2024",
      description: "Curso introdutório de programação usando Python.",
      skills: ["Python", "Programação", "Lógica", "Algoritmos"]
    },
    {
      id: 4,
      title: "Machine Learning",
      institution: "TIC em trilhas",
      duration: "set de 2024",
      description: "Curso focado em aprendizado de máquina e inteligência artificial.",
      skills: ["Machine Learning", "IA", "Aprendizado de Máquina", "Algoritmos"]
    },
    {
      id: 5,
      title: "College Algebra with Python",
      institution: "freeCodeCamp",
      duration: "jul de 2024",
      description: "Curso de álgebra universitária aplicada com Python.",
      skills: ["Python", "Matemática", "Álgebra", "Programação"]
    },
    {
      id: 6,
      title: "Fundamentos de Orientação a Objetos",
      institution: "Apple Developer Academy | PUCRS",
      duration: "jul de 2024",
      description: "Curso de extensão sobre programação orientada a objetos.",
      skills: ["POO", "Programação", "Desenvolvimento", "Conceitos OO"]
    },
    {
      id: 7,
      title: "Versionamento de Código",
      institution: "Apple Developer Academy | PUCRS",
      duration: "jul de 2024",
      description: "Curso sobre controle de versão e Git.",
      skills: ["Git", "Versionamento", "Controle de Versão", "Colaboração"]
    },
    {
      id: 8,
      title: "Banco de Dados",
      institution: "IFRS",
      duration: "fev de 2024",
      description: "Curso sobre fundamentos de banco de dados.",
      skills: ["SQL", "Banco de Dados", "Modelagem", "Consultas"]
    },
    {
      id: 9,
      title: "NLW Expert - HTML, CSS e JavaScript",
      institution: "Rocketseat",
      duration: "fev de 2024",
      description: "Trilha expert de desenvolvimento web frontend.",
      skills: ["HTML", "CSS", "JavaScript", "Frontend"]
    },
    {
      id: 10,
      title: "NLW Expert - Node.js",
      institution: "Rocketseat",
      duration: "fev de 2024",
      description: "Trilha expert de desenvolvimento backend com Node.js.",
      skills: ["Node.js", "Backend", "JavaScript", "APIs"]
    },
    {
      id: 11,
      title: "NLW Expert - Python",
      institution: "Rocketseat",
      duration: "fev de 2024",
      description: "Trilha expert de desenvolvimento com Python.",
      skills: ["Python", "Backend", "Desenvolvimento", "APIs"]
    },
    {
      id: 12,
      title: "NLW Expert - React",
      institution: "Rocketseat",
      duration: "fev de 2024",
      description: "Trilha expert de desenvolvimento frontend com React.",
      skills: ["React", "Frontend", "JavaScript", "Componentes"]
    },
    {
      id: 13,
      title: "Fundamentos Angular",
      institution: "Google",
      duration: "jan de 2024",
      description: "Curso sobre fundamentos do framework Angular.",
      skills: ["Angular", "TypeScript", "Frontend", "Framework"]
    }
  ];

  return (
    <section id="courses" className="courses">
      <div className="container">
        <h2 className="section-title">Formação & Cursos</h2>
        
        <div className="courses-grid">
          {courses.map((course) => (
            <div key={course.id} className="course-card">
              <div className="course-header">
                <h3 className="course-title">{course.title}</h3>
                <span className="course-institution">{course.institution}</span>
              </div>
              
              <div className="course-duration">
                <span className="duration-badge">{course.duration}</span>
              </div>
              
              <p className="course-description">{course.description}</p>
              
              <div className="course-skills">
                {course.skills.map((skill, index) => (
                  <span key={index} className="skill-tag">{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
        
        <div className="courses-cta">
          <p>Quer conhecer mais sobre minha formação e experiência?</p>
          <a 
            href="https://github.com/Costanza22" 
            className="cta-button"
            target="_blank"
            rel="noopener noreferrer"
          >
            Ver Projetos no GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default Courses;
