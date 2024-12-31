import React, { useState } from "react";
import styles from "../styles/Achievements.module.css";

const Achievements = () => {
  const [achievements, setAchievements] = useState([]);
  const [newAchievement, setNewAchievement] = useState("");

  const addAchievement = () => {
    setAchievements([...achievements, newAchievement]);
    setNewAchievement("");
  };

  return (
    <section className={styles.achievements}>
      <h2>Achievements</h2>
      <ul>
        {achievements.map((achievement, index) => (
          <li key={index}>{achievement}</li>
        ))}
      </ul>
      <button onClick={addAchievement}>Add Achievement</button>
    </section>
  );
};

export default Achievements;
