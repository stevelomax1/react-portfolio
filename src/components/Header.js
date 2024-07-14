import React from 'react';

function Header({ currentSection, handleSectionChange }) {
  return (
    <header>
      <h1>Steve Lomax</h1>
      <nav>
        <ul>
          {['About Me', 'Portfolio', 'Contact', 'Resume'].map((section) => (
            <li
              key={section}
              className={currentSection === section ? 'active' : ''}
              onClick={() => handleSectionChange(section)}
            >
              {section}
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default Header;
