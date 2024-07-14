import React from 'react';
import foreCaster from '../assets/forecaster.jpeg';
import lifeSorter from '../assets/lifesorter.jpeg';
import locksmith from '../assets/locksmith.jpeg';
import quizWiz from '../assets/quizwiz.jpeg';
import readMe from '../assets/readme.jpeg';
import logoLogo from '../assets/logo.png';

const projects = [
  { title: 'thelocksmith', liveLink: 'https://stevelomax1.github.io/thelocksmith/', repoLink: 'https://github.com/stevelomax1/thelocksmith.git', image: locksmith },
  { title: 'js-quiz-wiz', liveLink: 'https://stevelomax1.github.io/js-quiz-wiz/', repoLink: 'https://github.com/stevelomax1/js-quiz-wiz', image: quizWiz },
  { title: 'life-sorter', liveLink: 'https://stevelomax1.github.io/life-sorter/', repoLink: 'https://github.com/stevelomax1/life-sorter', image: lifeSorter },
  { title: 'forecaster', liveLink: 'https://stevelomax1.github.io/forecaster/', repoLink: 'https://github.com/stevelomax1/forecaster', image: foreCaster },
  { title: 'makeme-a-readme', liveLink: 'https://drive.google.com/file/d/1ltV0-18juuXHygWfEXAyUPQZ3JtkcKt_/view', repoLink: 'https://github.com/stevelomax1/makeme-a-readme', image: readMe },
  { title: 'logo-logo',  liveLink: '(https://drive.google.com/file/d/1yteSs_WB2BoD9LbyGe9Dq1f-ZH_U53pD/view?usp=sharing)', repoLink: 'https://github.com/stevelomax1/logo-logo', image: logoLogo },
];

function Portfolio() {
  return (
    <section className="portfolio-container">
          <h2>Portfolio</h2>
          <h3>Hover over the cards to see the links</h3>
      <div className="portfolio-grid">
        {projects.map((project, index) => (
          <div key={index} className="card" style={{ backgroundImage: `url(${project.image})` }}>
            <div className="overlay">
              <h3>{project.title}</h3>
              <a href={project.liveLink} target="_blank" rel="noopener noreferrer">Live</a>
              <a href={project.repoLink} target="_blank" rel="noopener noreferrer">Repo</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Portfolio;
