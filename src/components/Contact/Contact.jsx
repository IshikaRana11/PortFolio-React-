import React from "react";
import styles from "./Contact.module.css";
export default function Contact() {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Contact</h2>
        <p>Feel free to reach out!</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <img src="/images/contact/emailIcon.png" alt="Email Icon" />
          <a href="mailto:ishikaishik11@gmail.com">myemail@gmail.com</a>
        </li>
        <li className={styles.link}>
          <img src="/images/contact/githubIcon.png" alt="github Icon" />
          <a href="https://github.com/IshikaRana11">Github.com</a>
        </li>
        <li className={styles.link}>
          <img src="/images/contact/linkedinIcon.png" alt="LinkedIn Icon" />
          <a href="https://www.linkedin.com/in/ishika-rana-04786325a/">
            LinkedIn.com
          </a>
        </li>
      </ul>
    </footer>
  );
}
