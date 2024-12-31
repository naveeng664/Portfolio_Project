import React, { useState } from "react";
import styles from "../styles/Education.module.css";

const Education = () => {
  const [educationList, setEducationList] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [newEducation, setNewEducation] = useState({
    degree: "",
    field: "",
    school: "",
    year: "",
  });

  const handleAddEducation = () => {
    setEducationList([...educationList, newEducation]);
    setNewEducation({
      degree: "",
      field: "",
      school: "",
      year: "",
    });
    setShowForm(false);
  };

  return (
    <div className={styles.education}>
      <h2>Education Details</h2>
      {educationList.map((edu, index) => (
        <div key={index} className={styles.educationCard}>
          <h3>{edu.degree}</h3>
          <p>{edu.field}</p>
          <p>{edu.school}</p>
          <p>{edu.year}</p>
        </div>
      ))}
      <button onClick={() => setShowForm(true)} className={styles.addButton}>
        + Add
      </button>
      {showForm && (
        <div className={styles.modal}>
          <h3>Add Education</h3>
          <input
            type="text"
            placeholder="Degree"
            value={newEducation.degree}
            onChange={(e) =>
              setNewEducation({ ...newEducation, degree: e.target.value })
            }
          />
          <input
            type="text"
            placeholder="Field of Study"
            value={newEducation.field}
            onChange={(e) =>
              setNewEducation({ ...newEducation, field: e.target.value })
            }
          />
          <input
            type="text"
            placeholder="School Name"
            value={newEducation.school}
            onChange={(e) =>
              setNewEducation({ ...newEducation, school: e.target.value })
            }
          />
          <input
            type="text"
            placeholder="Year of Completion"
            value={newEducation.year}
            onChange={(e) =>
              setNewEducation({ ...newEducation, year: e.target.value })
            }
          />
          <button onClick={handleAddEducation} className={styles.saveButton}>
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

export default Education;
