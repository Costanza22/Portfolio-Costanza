import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'pt' | 'en';

interface Translations {
  main: {
    title: string;
    subtitle: string;
  };
  navigation: {
    expertise: string;
    education: string;
    history: string;
    projects: string;
    contact: string;
    menu: string;
  };
  expertise: {
    title: string;
    webDev: {
      title: string;
      description: string;
      techStack: string;
    };
    dataTools: {
      title: string;
      description: string;
      techStack: string;
    };
    projects: {
      title: string;
      description: string;
    };
  };
  education: {
    title: string;
    degrees: Array<{
      date: string;
      degree: string;
      institution: string;
      activities?: string;
      activitiesLabel?: string;
      technologies?: string;
      technologiesLabel?: string;
    }>;
  };
  timeline: {
    title: string;
    jobs: Array<{
      date: string;
      title: string;
      company: string;
      location: string;
      description: string;
    }>;
  };
  projects: {
    title: string;
    items: Array<{
      title: string;
      description: string;
      image: string;
      deployUrl: string;
      githubUrl?: string;
      articleUrl?: string;
    }>;
  };
  contact: {
    title: string;
    subtitle: string;
    nameLabel: string;
    namePlaceholder: string;
    nameError: string;
    emailLabel: string;
    emailPlaceholder: string;
    emailError: string;
    messageLabel: string;
    messagePlaceholder: string;
    messageError: string;
    sendButton: string;
  };
}

const translations: Record<Language, Translations> = {
  pt: {
    main: {
      title: 'Costanza Pasquotto Assef',
      subtitle: 'Engenheira de Software',
    },
    navigation: {
      expertise: 'Expertise',
      education: 'Formação',
      history: 'Histórico',
      projects: 'Projetos',
      contact: 'Contato',
      menu: 'Menu',
    },
    expertise: {
      title: 'Expertise',
      webDev: {
        title: 'Desenvolvimento Web Full Stack',
        description: 'Engenheira de Software com foco no desenvolvimento de sistemas web orientados a dados. Atuo na construção de aplicações web completas, integrando front-end em React, APIs REST e bancos de dados relacionais, com forte interesse em soluções data-driven e inteligência artificial.',
        techStack: 'Stack tecnológico:',
      },
      dataTools: {
        title: 'Dados e Ferramentas',
        description: 'Possuo experiência em modelagem de dados, elaboração de consultas SQL, visualização de informações e criação de dashboards para apoio à tomada de decisão, além de atuação em ambientes corporativos de produção e suporte a sistemas.',
        techStack: 'Stack tecnológico:',
      },
      projects: {
        title: 'Projetos',
        description: 'Sistemas web e dashboards orientados a dados, APIs REST e integração entre front-end e back-end, modelagem e consulta de bancos de dados relacionais.',
      },
    },
    education: {
      title: 'Formação Acadêmica',
      degrees: [
        {
          date: 'Em andamento',
          degree: 'Especialização em Inteligência Artificial Aplicada',
          institution: 'Universidade Federal do Paraná (UFPR)',
          activities: 'Inteligência Artificial Aplicada, Soluções práticas, Automação, Aprendizado de Máquina (Machine Learning), Visão Computacional, Chatbots, Transformação digital',
          activitiesLabel: 'Atividades e grupos',
          technologies: 'Python, Inteligência artificial',
          technologiesLabel: 'Tecnologias',
        },
        {
          date: 'dez de 2024',
          degree: 'Bacharelado em Engenharia de Software',
          institution: 'Católica de Santa Catarina - Centro Universitário',
        },
      ],
    },
    timeline: {
      title: 'Histórico Profissional',
      jobs: [
        {
          date: 'fev de 2026 - o momento',
          title: 'Desenvolvedora web full stack',
          company: 'Instituto ALUME',
          location: 'Remoto',
          description: 'Next.js e Desenvolvimento web',
        },
        {
          date: 'jan de 2026 - fev de 2026',
          title: 'Desenvolvedora front-end',
          company: 'Instituto ALUME',
          location: 'Ilhéus, Bahia, Brasil · Remota',
          description: 'Colaboração em iniciativa social e ambiental, participando da estruturação de uma plataforma web a partir de protótipo inicial. Colaboração em squad técnico utilizando Next.js, Node.js, TypeScript e Git, com foco em transformar a POC em produto funcional.',
        },
        {
          date: 'nov de 2024 - abr de 2025',
          title: 'Analista de suporte de TI Junior',
          company: 'Schulze Advogados Associados',
          location: 'Joinville, Santa Catarina, Brasil',
          description: 'Instalação de impressoras, manutenção de computadores, instalação de softwares e suporte N1.',
        },
        {
          date: 'jun de 2024 - dez de 2025',
          title: 'Engenheira de Software',
          company: 'BHT Detector',
          location: 'Santa Catarina, Brasil',
          description: 'Desenvolvi de forma independente o BHT Detector, um sistema de detecção automatizada utilizando técnicas de visão computacional e machine learning. Fui responsável por todas as etapas do projeto: definição do problema, coleta e preparação dos dados, desenvolvimento e validação do modelo, construção do pipeline de inferência e implementação do backend e da interface. Tecnologias: Python, OpenCV, scikit-learn / PyTorch / TensorFlow, FastAPI / Flask, React, Docker, TypeScript.',
        },
        {
          date: 'abr de 2024 - jan de 2026',
          title: 'Engenheira de software',
          company: 'Projeto independente',
          location: 'Santa Catarina, Brasil',
          description: 'Desenvolvi o Joi Patrio, uma plataforma web voltada à documentação e valorização do patrimônio histórico de Joinville, com foco em casarões históricos. Estruturei o sistema como uma solução de informação georreferenciada organizada em camadas. Atuei no desenvolvimento do frontend em React, criando mapas interativos, páginas de casarões e mecanismos de busca e filtragem. No backend, em Node.js, implementei regras de negócio, validação de dados, controle de acesso e moderação das contribuições da comunidade. Projetei e integrei o banco de dados MySQL para organizar dados arquitetônicos e históricos, imagens, comentários e relações espaciais.',
        },
        {
          date: 'mar de 2024 - ago de 2024',
          title: 'Estagiária de Inteligência de Mercado',
          company: 'WEG',
          location: 'Jaraguá do Sul, Santa Catarina, Brasil',
          description: 'Criação de dashboards com Tableau e campos calculados.',
        },
      ],
    },
    projects: {
      title: 'Projetos Pessoais',
      items: [
        {
          title: 'BHT Detector - Aplicativo Mobile',
          description: 'Aplicativo mobile para detectar BHT (Butylated Hydroxytoluene) em rótulos de alimentos através de análise de imagem usando OCR e inteligência artificial. Tecnologias: React Native, Expo, TypeScript, OCR.',
          image: 'bht-detector',
          deployUrl: 'https://www.bhtdetector.com.br/',
          githubUrl: 'https://github.com/Costanza22/BHT-Detector',
          articleUrl: 'https://medium.com/@costanza22/como-descobri-minha-alergia-ao-bht-e-criei-uma-solu%C3%A7%C3%A3o-em-ia-para-ajudar-outras-pessoas-91fbbde32e03',
        },
        {
          title: 'SafeGluten - IA Aplicada à Saúde',
          description: 'Aplicação full stack para reduzir riscos clínicos e alimentares na doença celíaca. Oferece suporte à análise de dados laboratoriais e auditoria inteligente de alimentos e ingredientes. Prioriza modelagem correta de dados e decisões baseadas em fatos armazenados, não em inferência cega. Tecnologias: React, Node.js, Express, PostgreSQL, Python, OCR, NLP.',
          image: 'gluten-aware',
          deployUrl: 'https://allergie.vercel.app/',
          githubUrl: 'https://github.com/Costanza22/gluten-aware',
          articleUrl: 'https://medium.com/@costanza22/ia-aplicada-%C3%A0-sa%C3%BAde-otimizando-o-diagn%C3%B3stico-da-doen%C3%A7a-cel%C3%ADaca-e-a-seguran%C3%A7a-alimentar-2c454f3a5427',
        },
        {
          title: 'Joi Patrio - Patrimônio Histórico de Joinville',
          description: 'Plataforma web dedicada à documentação e valorização do patrimônio histórico de Joinville, com foco nos casarões históricos. Oferece mapas interativos, busca inteligente, sistema de favoritos e engajamento da comunidade através de sugestões. Interface moderna e responsiva que conecta cidadãos e visitantes à rica herança cultural da cidade. Tecnologias: React, Node.js, MySQL, Docker.',
          image: 'patrio',
          deployUrl: 'https://joi-patrio.vercel.app/',
          githubUrl: 'https://github.com/Costanza22/Joi-Patrio-Novo',
          articleUrl: 'https://medium.com/@costanza22/preservar-mem%C3%B3ria-tamb%C3%A9m-%C3%A9-um-problema-de-engenharia-patrim%C3%B4nio-hist%C3%B3rico-sob-o-olhar-de-uma-026a08d4d122',
        },
        {
          title: 'Enchentes no RS - Análise de Impactos (2020-2024)',
          description: 'Análise completa dos impactos das enchentes no Rio Grande do Sul, incluindo a crise histórica de 2024. Fornece dados, análises e visualizações para compreender padrões temporais, vulnerabilidades regionais e correlações entre variáveis hidrológicas e sociais. Inclui análise temporal, regional, da crise 2024 e insights sobre padrões e vulnerabilidades. Tecnologias: Python, Pandas, Matplotlib, Jupyter Notebooks.',
          image: 'rs',
          deployUrl: 'https://www.kaggle.com/datasets/cosassef/enchentes-no-rs-impactos-e-anlises-2020-2024',
          githubUrl: 'https://github.com/Costanza22/enchentes-rs',
        },
        {
          title: 'Analisador de Código',
          description: 'Ferramenta completa para análise de código que verifica segurança, arquitetura e clean code. Oferece análise de segurança (detecção de vulnerabilidades, SQL Injection, credenciais hardcoded), análise de arquitetura (complexidade ciclomática, acoplamento, modularização) e análise de clean code (dead code, números mágicos, código duplicado). Sistema de pontuação de 0-100 com recomendações detalhadas. Tecnologias: Node.js, Express, React, JavaScript.',
          image: 'ia-codigo',
          deployUrl: 'https://github.com/Costanza22/ia-analysis',
          githubUrl: 'https://github.com/Costanza22/ia-analysis',
          articleUrl: 'https://medium.com/@costanza22/o-algoritmo-da-consci%C3%AAncia-entre-o-vibe-coding-e-a-engenharia-est%C3%B3ica-20097b8541c9',
        },
        {
          title: 'Norovírus Brasil - Dashboard de Casos e Eventos',
          description: 'Dashboard interativo para visualização de casos de gastroenterite e eventos relacionados ao Norovírus no Brasil. Aplicação de estudo que combina Node.js, Express e PostgreSQL para o backend, e React com Vite para o frontend. Oferece visualização de dados por estado, filtros temporais, estatísticas agregadas, timeline de eventos, exportação de dados e modo escuro. Tecnologias: React, Vite, Node.js, Express, PostgreSQL, Recharts.',
          image: 'noro-virus',
          deployUrl: 'https://github.com/Costanza22/NoroVirus-Case',
          githubUrl: 'https://github.com/Costanza22/NoroVirus-Case',
        },
      ],
    },
    contact: {
      title: 'Contato',
      subtitle: 'Tem um projeto esperando para ser realizado? Vamos colaborar e fazer acontecer!',
      nameLabel: 'Seu Nome',
      namePlaceholder: 'Qual é o seu nome?',
      nameError: 'Por favor, insira seu nome',
      emailLabel: 'Email / Telefone',
      emailPlaceholder: 'Como posso entrar em contato?',
      emailError: 'Por favor, insira seu email ou telefone',
      messageLabel: 'Mensagem',
      messagePlaceholder: 'Envie-me qualquer consulta ou pergunta',
      messageError: 'Por favor, insira a mensagem',
      sendButton: 'Enviar',
    },
  },
  en: {
    main: {
      title: 'Costanza Pasquotto Assef',
      subtitle: 'Software Engineer',
    },
    navigation: {
      expertise: 'Expertise',
      education: 'Education',
      history: 'History',
      projects: 'Projects',
      contact: 'Contact',
      menu: 'Menu',
    },
    expertise: {
      title: 'Expertise',
      webDev: {
        title: 'Full Stack Web Development',
        description: 'Software Engineer focused on data-oriented web systems development. I work on building complete web applications, integrating React front-end, REST APIs and relational databases, with a strong interest in data-driven solutions and artificial intelligence.',
        techStack: 'Tech stack:',
      },
      dataTools: {
        title: 'Data & Tools',
        description: 'I have experience in data modeling, SQL query development, information visualization and dashboard creation for decision support, as well as working in corporate production environments and system support.',
        techStack: 'Tech stack:',
      },
      projects: {
        title: 'Projects',
        description: 'Data-oriented web systems and dashboards, REST APIs and front-end/back-end integration, relational database modeling and querying.',
      },
    },
    education: {
      title: 'Academic Education',
      degrees: [
        {
          date: 'In Progress',
          degree: 'Postgraduate Degree in Applied Artificial Intelligence',
          institution: 'Federal University of Paraná (UFPR)',
          activities: 'Applied Artificial Intelligence, Practical Solutions, Automation, Machine Learning, Computer Vision, Chatbots, Digital Transformation',
          activitiesLabel: 'Activities and groups',
          technologies: 'Python, Artificial Intelligence',
          technologiesLabel: 'Technologies',
        },
        {
          date: 'Dec 2024',
          degree: 'Bachelor\'s Degree in Software Engineering',
          institution: 'Católica de Santa Catarina - University Center',
        },
      ],
    },
    timeline: {
      title: 'Career History',
      jobs: [
        {
          date: 'Feb 2026 - Present',
          title: 'Full Stack Web Developer',
          company: 'Instituto ALUME',
          location: 'Remote',
          description: 'Next.js and Web Development',
        },
        {
          date: 'Jan 2026 - Feb 2026',
          title: 'Front-end Developer',
          company: 'Instituto ALUME',
          location: 'Ilhéus, Bahia, Brazil · Remote',
          description: 'Collaboration on a social and environmental initiative, participating in structuring a web platform from an initial prototype. Technical squad collaboration using Next.js, Node.js, TypeScript and Git, focusing on transforming the POC into a functional product.',
        },
        {
          date: 'Nov 2024 - Apr 2025',
          title: 'Junior IT Support Analyst',
          company: 'Schulze Advogados Associados',
          location: 'Joinville, Santa Catarina, Brazil',
          description: 'Printer installation, computer maintenance, software installation and Level 1 support.',
        },
        {
          date: 'Jun 2024 - Dec 2025',
          title: 'Software Engineer',
          company: 'BHT Detector',
          location: 'Santa Catarina, Brazil',
          description: 'Independently developed BHT Detector, an automated detection system using computer vision and machine learning techniques. Responsible for all project stages: problem definition, data collection and preparation, model development and validation, inference pipeline construction, and backend and interface implementation. Technologies: Python, OpenCV, scikit-learn / PyTorch / TensorFlow, FastAPI / Flask, React, Docker, TypeScript.',
        },
        {
          date: 'Apr 2024 - Jan 2026',
          title: 'Software Engineer',
          company: 'Independent Project',
          location: 'Santa Catarina, Brazil',
          description: 'Developed Joi Patrio, a web platform focused on documenting and valuing the historical heritage of Joinville, with a focus on historic mansions. Structured the system as a georeferenced information solution organized in layers. Worked on React frontend development, creating interactive maps, mansion pages, and search and filtering mechanisms. In the Node.js backend, implemented business rules, data validation, access control and community contribution moderation. Designed and integrated MySQL database to organize architectural and historical data, images, comments and spatial relationships.',
        },
        {
          date: 'Mar 2024 - Aug 2024',
          title: 'Market Intelligence Intern',
          company: 'WEG',
          location: 'Jaraguá do Sul, Santa Catarina, Brazil',
          description: 'Dashboard creation with Tableau and calculated fields.',
        },
      ],
    },
    projects: {
      title: 'Personal Projects',
      items: [
        {
          title: 'BHT Detector - Mobile App',
          description: 'Mobile application to detect BHT (Butylated Hydroxytoluene) in food labels through image analysis using OCR and artificial intelligence. Technologies: React Native, Expo, TypeScript, OCR.',
          image: 'bht-detector',
          deployUrl: 'https://www.bhtdetector.com.br/',
          githubUrl: 'https://github.com/Costanza22/BHT-Detector',
          articleUrl: 'https://medium.com/@costanza22/como-descobri-minha-alergia-ao-bht-e-criei-uma-solu%C3%A7%C3%A3o-em-ia-para-ajudar-outras-pessoas-91fbbde32e03',
        },
        {
          title: 'SafeGluten - AI Applied to Health',
          description: 'Full stack application to reduce clinical and food risks in celiac disease. Provides support for laboratory data analysis and intelligent food and ingredient auditing. Prioritizes correct data modeling and fact-based decisions, not blind inference. Technologies: React, Node.js, Express, PostgreSQL, Python, OCR, NLP.',
          image: 'gluten-aware',
          deployUrl: 'https://allergie.vercel.app/',
          githubUrl: 'https://github.com/Costanza22/gluten-aware',
          articleUrl: 'https://medium.com/@costanza22/ia-aplicada-%C3%A0-sa%C3%BAde-otimizando-o-diagn%C3%B3stico-da-doen%C3%A7a-cel%C3%ADaca-e-a-seguran%C3%A7a-alimentar-2c454f3a5427',
        },
        {
          title: 'Joi Patrio - Joinville Historical Heritage',
          description: 'Web platform dedicated to documenting and valuing the historical heritage of Joinville, focusing on historic mansions. Offers interactive maps, intelligent search, favorites system and community engagement through suggestions. Modern and responsive interface that connects citizens and visitors to the city\'s rich cultural heritage. Technologies: React, Node.js, MySQL, Docker.',
          image: 'patrio',
          deployUrl: 'https://joi-patrio.vercel.app/',
          githubUrl: 'https://github.com/Costanza22/Joi-Patrio-Novo',
          articleUrl: 'https://medium.com/@costanza22/preservar-mem%C3%B3ria-tamb%C3%A9m-%C3%A9-um-problema-de-engenharia-patrim%C3%B4nio-hist%C3%B3rico-sob-o-olhar-de-uma-026a08d4d122',
        },
        {
          title: 'Floods in RS - Impact Analysis (2020-2024)',
          description: 'Complete analysis of flood impacts in Rio Grande do Sul, including the historic 2024 crisis. Provides data, analyses and visualizations to understand temporal patterns, regional vulnerabilities and correlations between hydrological and social variables. Includes temporal, regional, 2024 crisis analysis and insights on patterns and vulnerabilities. Technologies: Python, Pandas, Matplotlib, Jupyter Notebooks.',
          image: 'rs',
          deployUrl: 'https://www.kaggle.com/datasets/cosassef/enchentes-no-rs-impactos-e-anlises-2020-2024',
          githubUrl: 'https://github.com/Costanza22/enchentes-rs',
        },
        {
          title: 'Code Analyzer',
          description: 'Complete tool for code analysis that checks security, architecture and clean code. Offers security analysis (vulnerability detection, SQL Injection, hardcoded credentials), architecture analysis (cyclomatic complexity, coupling, modularization) and clean code analysis (dead code, magic numbers, code duplication). Scoring system from 0-100 with detailed recommendations. Technologies: Node.js, Express, React, JavaScript.',
          image: 'ia-codigo',
          deployUrl: 'https://github.com/Costanza22/ia-analysis',
          githubUrl: 'https://github.com/Costanza22/ia-analysis',
          articleUrl: 'https://medium.com/@costanza22/o-algoritmo-da-consci%C3%AAncia-entre-o-vibe-coding-e-a-engenharia-est%C3%B3ica-20097b8541c9',
        },
        {
          title: 'Norovirus Brazil - Cases and Events Dashboard',
          description: 'Interactive dashboard for visualizing gastroenteritis cases and events related to Norovirus in Brazil. Study application that combines Node.js, Express and PostgreSQL for the backend, and React with Vite for the frontend. Offers data visualization by state, temporal filters, aggregated statistics, event timeline, data export and dark mode. Technologies: React, Vite, Node.js, Express, PostgreSQL, Recharts.',
          image: 'noro-virus',
          deployUrl: 'https://github.com/Costanza22/NoroVirus-Case',
          githubUrl: 'https://github.com/Costanza22/NoroVirus-Case',
        },
      ],
    },
    contact: {
      title: 'Contact',
      subtitle: 'Got a project waiting to be realized? Let\'s collaborate and make it happen!',
      nameLabel: 'Your Name',
      namePlaceholder: 'What\'s your name?',
      nameError: 'Please enter your name',
      emailLabel: 'Email / Phone',
      emailPlaceholder: 'How can I reach you?',
      emailError: 'Please enter your email or phone number',
      messageLabel: 'Message',
      messagePlaceholder: 'Send me any inquiries or questions',
      messageError: 'Please enter the message',
      sendButton: 'Send',
    },
  },
};

interface TranslationContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: Translations;
}

const TranslationContext = createContext<TranslationContextType | undefined>(undefined);

export const TranslationProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>(() => {
    const saved = localStorage.getItem('language');
    return (saved === 'pt' || saved === 'en') ? saved : 'pt';
  });

  const handleSetLanguage = (lang: Language) => {
    setLanguage(lang);
    localStorage.setItem('language', lang);
  };

  return (
    <TranslationContext.Provider value={{ language, setLanguage: handleSetLanguage, t: translations[language] }}>
      {children}
    </TranslationContext.Provider>
  );
};

export const useTranslation = () => {
  const context = useContext(TranslationContext);
  if (!context) {
    throw new Error('useTranslation must be used within a TranslationProvider');
  }
  return context;
};

