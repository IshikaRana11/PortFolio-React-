import React from "react";
import projects from "../../data/project.json";
import ProjectCard from "./ProjectCard";
import styles from "./Project.module.css";
export default function Projects() {
  return (
    <section id="projects" className={styles.Container}>
      <h2 className={styles.title}>Projects</h2>
      <div className={styles.projects}>
        {projects.map((project, id) => (
          <ProjectCard key={id} project={project} />
        ))}
      </div>
    </section>
  );
}
