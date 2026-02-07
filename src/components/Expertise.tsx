import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact } from '@fortawesome/free-brands-svg-icons';
import { faDatabase, faCode } from '@fortawesome/free-solid-svg-icons';
import Chip from '@mui/material/Chip';
import { useTranslation } from '../contexts/TranslationContext';
import '../assets/styles/Expertise.scss';

const labelsFirst = [
    "React",
    "JavaScript",
    "TypeScript",
    "HTML",
    "CSS",
    "Node.js",
    "PostgreSQL",
    "MySQL",
    "SQL",
    "Python",
];

const labelsSecond = [
    "Git",
    "GitHub",
    "Docker",
    "Power BI",
];

function Expertise() {
    const { t } = useTranslation();

    return (
    <div className="container" id="expertise">
        <div className="skills-container">
            <h1>{t.expertise.title}</h1>
            <div className="skills-grid">
                <div className="skill">
                    <FontAwesomeIcon icon={faReact} size="3x"/>
                    <h3>{t.expertise.webDev.title}</h3>
                    <p>{t.expertise.webDev.description}</p>
                    <div className="flex-chips">
                        <span className="chip-title">{t.expertise.webDev.techStack}</span>
                        {labelsFirst.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faDatabase} size="3x"/>
                    <h3>{t.expertise.dataTools.title}</h3>
                    <p>{t.expertise.dataTools.description}</p>
                    <div className="flex-chips">
                        <span className="chip-title">{t.expertise.dataTools.techStack}</span>
                        {labelsSecond.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faCode} size="3x"/>
                    <h3>{t.expertise.projects.title}</h3>
                    <p>{t.expertise.projects.description}</p>
                </div>
            </div>
        </div>
    </div>
    );
}

export default Expertise;