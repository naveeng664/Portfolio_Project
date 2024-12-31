import React, { useState } from "react";
import styles from "../styles/Projects.module.css";

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [newProject, setNewProject] = useState({ name: "", description: "", skills: "" });

  const addProject = () => {
    setProjects([...projects, newProject]);
    setNewProject({ name: "", description: "", skills: "" });
  };

  return (
    <section className={styles.projects}>
      <h2>Projects</h2>
      <ul>
        {projects.map((project, index) => (
          <li key={index}>{`${project.name} - ${project.description} (${project.skills})`}</li>
        ))}
      </ul>
      <button onClick={addProject}>Add Project</button>
    </section>
  );
};

export default Projects;
