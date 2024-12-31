import React, { useState } from "react";
import styles from "../styles/WorkExperience.module.css";

const WorkExperience = () => {
  const [workExperiences, setWorkExperiences] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [newWork, setNewWork] = useState({
    role: "",
    company: "",
    startDate: "",
    endDate: "",
    location: "",
    description: "",
  });

  const handleAddWork = () => {
    setWorkExperiences([...workExperiences, newWork]);
    setNewWork({
      role: "",
      company: "",
      startDate: "",
      endDate: "",
      location: "",
      description: "",
    });
    setShowForm(false);
  };

  return (
    <div className={styles.workExperience}>
      <h2>Work Experience</h2>
      {workExperiences.map((work, index) => (
        <div key={index} className={styles.workCard}>
          <h3>{work.role}</h3>
          <p>{work.company}</p>
          <p>
            {work.startDate} - {work.endDate}
          </p>
          <p>{work.location}</p>
          <p>{work.description}</p>
        </div>
      ))}
      <button onClick={() => setShowForm(true)} className={styles.addButton}>
        + Add
      </button>
      {showForm && (
        <div className={styles.modal}>
          <h3>Add Work Experience</h3>
          <input
            type="text"
            placeholder="Role"
            value={newWork.role}
            onChange={(e) => setNewWork({ ...newWork, role: e.target.value })}
          />
          <input
            type="text"
            placeholder="Company"
            value={newWork.company}
            onChange={(e) =>
              setNewWork({ ...newWork, company: e.target.value })
            }
          />
          <input
            type="date"
            placeholder="Start Date"
            value={newWork.startDate}
            onChange={(e) =>
              setNewWork({ ...newWork, startDate: e.target.value })
            }
          />
          <input
            type="date"
            placeholder="End Date"
            value={newWork.endDate}
            onChange={(e) =>
              setNewWork({ ...newWork, endDate: e.target.value })
            }
          />
          <input
            type="text"
            placeholder="Location"
            value={newWork.location}
            onChange={(e) =>
              setNewWork({ ...newWork, location: e.target.value })
            }
          />
          <textarea
            placeholder="Description"
            value={newWork.description}
            onChange={(e) =>
              setNewWork({ ...newWork, description: e.target.value })
            }
          ></textarea>
          <button onClick={handleAddWork} className={styles.saveButton}>
            Save
          </button>
          <button
            onClick={() => setShowForm(false)}
            className={styles.cancelButton}
          >
            Cancel
          </button>
        </div>
      )}
    </div>
  );
};

export default WorkExperience;
