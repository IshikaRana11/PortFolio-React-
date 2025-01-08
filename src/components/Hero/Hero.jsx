import React from "react";
import styles from "./Hero.module.css";
const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi I am Ishika</h1>
        <p className={styles.description}>
          Hi, I'm Ishika Rana, a full Stack Developer passionate about building
          dynamic and scalable web applications using MongoDB, Express.js,
          React, and Node.js.
        </p>
        <a href="mailto:ishikaishik11@gmail.com" className={styles.contactBtn}>
          Contact Me
        </a>
      </div>
      <img src="/images/hero/heroImage.png" className={styles.heroImg} />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};

export default Hero;
