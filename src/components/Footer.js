import React from "react";
import styles from "../styles/Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <p>Contact me at:</p>
      <ul>
        <li>Email: yourname@example.com</li>
        <li>Phone: +1234567890</li>
        <li><a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
      </ul>
    </footer>
  );
};

export default Footer;
