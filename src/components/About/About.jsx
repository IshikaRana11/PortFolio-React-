import React from "react";
import styles from "./About.module.css";
const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img
          src="/images/about/rb_3101.png"
          alt="me sitting with laptop"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src="/images/about/cursorIcon.png" alt="cursor-Icon" />
            <div className={styles.aboutItemText}>
              <h3>Frontend Developer</h3>
              <p>
                I am Frontend Developer experience in building and optimising
                pages
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src="/images/about/serverIcon.png" alt="server-Icon" />
            <div className={styles.aboutItemText}>
              <h3>Backend Developer</h3>
              <p>
                I am Backend Developer experience in building fast and
                optimising backends and APIs
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src="/images/about/uiIcon.png" alt="UI-Icon" />
            <div className={styles.aboutItemText}>
              <h3>UI Designer</h3>
              <p>
                I have created multiple landing pages and have created design
                system as well
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default About;
