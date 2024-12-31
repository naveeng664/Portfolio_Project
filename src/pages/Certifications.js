import React, { useState } from "react";
import styles from "../styles/Certifications.module.css";

const Certifications = () => {
  const [certifications, setCertifications] = useState([]);
  const [newCert, setNewCert] = useState("");

  const addCertification = () => {
    setCertifications([...certifications, newCert]);
    setNewCert("");
  };

  return (
    <section className={styles.certifications}>
      <h2>Certifications</h2>
      <ul>
        {certifications.map((cert, index) => (
          <li key={index}>{cert}</li>
        ))}
      </ul>
      <button onClick={addCertification}>Add Certification</button>
    </section>
  );
};

export default Certifications;
