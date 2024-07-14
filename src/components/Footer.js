import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faStackOverflow } from '@fortawesome/free-brands-svg-icons';


function Footer() {
  return (
    <footer>
      <a href="https://github.com/stevelomax1" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faGithub} size="2x" />
      </a>
      <a href="https://www.linkedin.com/in/steve-lomax-b5b54935/" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faLinkedin} size="2x" />
      </a>
      <a href="https://stackoverflow.com/users/26371559/steve-lomax" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faStackOverflow} size="2x" />
      </a>
    </footer>
  );
}

export default Footer;

