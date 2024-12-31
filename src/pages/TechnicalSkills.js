import React, { useState } from "react";
import styles from "../styles/TechnicalSkills.module.css";

const TechnicalSkills = () => {
  const [skills, setSkills] = useState([]);
  const [newSkill, setNewSkill] = useState("");

  const addSkill = () => {
    setSkills([...skills, newSkill]);
    setNewSkill("");
  };

  return (
    <section className={styles.technicalSkills}>
      <h2>Technical Skills</h2>
      <ul>
        {skills.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>
      <button onClick={addSkill}>Add Skill</button>
    </section>
  );
};

export default TechnicalSkills;
