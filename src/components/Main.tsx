import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import profileImage from '../assets/images/costanza profile.jpg';
import backgroundImage from '../assets/images/background.jpg';
import { useTranslation } from '../contexts/TranslationContext';
import '../assets/styles/Main.scss';

function Main() {
  const { t } = useTranslation();
  
  const sectionStyle = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundAttachment: 'fixed',
    backgroundPosition: 'center'
  };

  return (
    <div className="container">
      <div className="about-section" style={sectionStyle}>
        <div className="image-wrapper">
          <img src={profileImage} alt="Profile" />
        </div>
        <div className="content">
          <div className="social_icons">
            <a href="https://github.com/Costanza22" target="_blank" rel="noopener noreferrer" aria-label="GitHub profile"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/costanzaassef/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn profile"><LinkedInIcon/></a>
          </div>
          <h1>{t.main.title}</h1>
          <p>{t.main.subtitle}</p>

          <div className="mobile_social_icons">
            <a href="https://github.com/Costanza22" target="_blank" rel="noopener noreferrer" aria-label="GitHub profile"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/costanzaassef/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn profile"><LinkedInIcon/></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;