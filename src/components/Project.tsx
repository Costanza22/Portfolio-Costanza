import React from "react";
import mock01 from '../assets/images/mock01.png';
import mock02 from '../assets/images/mock02.png';
import mock03 from '../assets/images/mock03.png';
import mock04 from '../assets/images/mock04.png';
import mock05 from '../assets/images/mock05.png';
import mock06 from '../assets/images/mock06.png';
import mock07 from '../assets/images/mock07.png';
import mock08 from '../assets/images/mock08.png';
import mock09 from '../assets/images/mock09.png';
import mock10 from '../assets/images/mock10.png';
import bhtDetector from '../assets/images/bht-detector.png';
import glutenAware from '../assets/images/gluten aware.png';
import patrio from '../assets/images/patrio.png';
import rs from '../assets/images/rs.png';
import iaCodigo from '../assets/images/ia-codigo.png';
import noroVirus from '../assets/images/noro-virus-p.png';
import { useTranslation } from '../contexts/TranslationContext';
import '../assets/styles/Project.scss';

const imageMap: Record<string, string> = {
  mock01,
  mock02,
  mock03,
  mock04,
  mock05,
  mock06,
  mock07,
  mock08,
  mock09,
  mock10,
  'bht-detector': bhtDetector,
  'gluten-aware': glutenAware,
  'patrio': patrio,
  'rs': rs,
  'ia-codigo': iaCodigo,
  'noro-virus': noroVirus,
};

function Project() {
    const { t } = useTranslation();
    
    return(
    <div className="projects-container" id="projects">
        <h1>{t.projects.title}</h1>
        <div className="projects-grid">
            {t.projects.items.map((project, index) => (
                <div key={index} className="project">
                    <a href={project.deployUrl} target="_blank" rel="noopener noreferrer">
                        <img 
                            src={imageMap[project.image] || mock10} 
                            className="zoom" 
                            alt={project.title} 
                            width="100%"
                        />
                    </a>
                    <a href={project.deployUrl} target="_blank" rel="noopener noreferrer">
                        <h2>{project.title}</h2>
                    </a>
                    <div style={{ marginBottom: '10px' }}>
                        {project.githubUrl && (
                            <a 
                                href={project.githubUrl} 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="project-link"
                            >
                                🔗 GitHub
                            </a>
                        )}
                        {project.deployUrl && project.deployUrl.includes('kaggle.com') && (
                            <a 
                                href={project.deployUrl} 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="project-link"
                            >
                                📊 Kaggle
                            </a>
                        )}
                        {project.articleUrl && (
                            <a 
                                href={project.articleUrl} 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="project-link"
                            >
                                📝 Artigo
                            </a>
                        )}
                    </div>
                    <p>{project.description}</p>
                </div>
            ))}
        </div>
    </div>
    );
}

export default Project;