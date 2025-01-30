import React from 'react';
import developerImage from '../assets/slpic.jpg';

function AboutMe() {
  return (
    <section className="about-me-container">
      <h2>About Me</h2>
      <img src={developerImage} alt="Developer Avatar" />
      <p>Hi, I'm Steve Lomax. I am a web developer with a passion for creating and learning. I am looking forward to the future as the world continues to evolve. Everyday is an amazing adventure and I'm here for it!</p>
    </section>
  );
}

export default AboutMe;
