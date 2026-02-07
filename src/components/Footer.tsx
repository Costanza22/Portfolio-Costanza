import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../assets/styles/Footer.scss'

function Footer() {
  return (
    <footer>
      <div>
        <a href="https://github.com/Costanza22" target="_blank" rel="noopener noreferrer" aria-label="GitHub profile"><GitHubIcon/></a>
        <a href="https://www.linkedin.com/in/costanzaassef/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn profile"><LinkedInIcon/></a>
      </div>
      <p>A portfolio designed & built by <a href="https://github.com/Costanza22" target="_blank" rel="noopener noreferrer">Costanza Pasquotto Assef</a> with 💜</p>
    </footer>
  );
}

export default Footer;