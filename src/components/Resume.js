import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileDownload } from "@fortawesome/free-solid-svg-icons";
import {
  faReact,
  faJs,
  faHtml5,
  faCss3Alt,
  faNodeJs,
} from "@fortawesome/free-brands-svg-icons";
import { faDatabase } from "@fortawesome/free-solid-svg-icons";
import resume from "../assets/frontendresume.pdf";

function Resume() {
  return (
    <section className="resume-container">
      <h2>Resume</h2>
      <a href={resume} download className="resume-download-link">
        <FontAwesomeIcon icon={faFileDownload} size="2x" />
        <span>Download Resume</span>
      </a>
      <h3>Proficiencies</h3>
      <ul className="proficiencies">
        <li>
          <FontAwesomeIcon icon={faReact} size="2x" /> <span>React</span>
        </li>
        <li>
          <FontAwesomeIcon icon={faJs} size="2x" /> <span>JavaScript</span>
        </li>
        <li>
          <FontAwesomeIcon icon={faHtml5} size="2x" /> <span>HTML</span>
        </li>
        <li>
          <FontAwesomeIcon icon={faCss3Alt} size="2x" /> <span>CSS</span>
        </li>
        <li>
          <FontAwesomeIcon icon={faDatabase} size="2x" /> <span>MySQL</span>
        </li>
        <li>
          <FontAwesomeIcon icon={faDatabase} size="2x" /> <span>MongoDB</span>
        </li>
        <li className="center-nodejs">
          <FontAwesomeIcon icon={faNodeJs} size="2x" /> <span>Node.js</span>
        </li>
      </ul>
    </section>
  );
}

export default Resume;
