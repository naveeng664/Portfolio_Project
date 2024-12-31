import React from "react";
import styles from "../styles/Header.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <h1>User Portfolio</h1>
      <nav>
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#education">Education</a></li>
          <li><a href="#work-experience">Work Experience</a></li>
          <li><a href="#technical-skills">Technical Skills</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#certifications">Certifications</a></li>
          <li><a href="#achievements">Achievements</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
