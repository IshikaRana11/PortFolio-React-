import React from "react";
import styles from "./ProjectCard.module.css";

export default function ProjectCard({ project }) {
  const { title, description, imageSrc, demo, source, skills = [] } = project;

  return (
    <div className={styles.container}>
      <img src={imageSrc} alt={title} className={styles.image} />
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>
      <ul className={styles.skills}>
        {skills.map((skill, id) => (
          <li key={id} className={styles.skill}>
            {skill}
          </li>
        ))}
      </ul>
      <div className={styles.links}>
        <a
          href="https://www.cloudskillsboost.google/public_profiles/f7e9bdcb-bc2e-4786-b419-b729f994fae8"
          className={styles.link}
        >
          Demo
        </a>
        <a href="https://www.cloudskillsboost.google/" className={styles.link}>
          Source
        </a>
      </div>
    </div>
  );
}
