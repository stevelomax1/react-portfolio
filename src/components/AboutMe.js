import React from 'react';
import developerImage from '../assets/slpic.jpg';

function AboutMe() {
  return (
    <section className="about-me-container">
      <h2>About Me</h2>
      <img src={developerImage} alt="Developer Avatar" />
      <p>I am a web developer with a passion for creating and learning. I am currently increasing my knowledge and proficiency in HTML,CSS, and Javascript. I am looking forward to the future as I continue to grow in web development.</p>
    </section>
  );
}

export default AboutMe;
