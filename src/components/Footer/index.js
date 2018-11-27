import React from "react";
import styles from "./styles.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <ul className={styles.nav}>
        <li>
          <a className={styles.footerLink} href="mailto:rtylermalon@gmail.com">
            Contact
          </a>
        </li>
        <li>
          <a
            className={styles.footerLink}
            href="https://linkedin.com/rtylermalone"
          >
            LinkedIn
          </a>
        </li>
        <li>
          <a className={styles.footerLink} href="https://github.com/rtmalone">
            Github
          </a>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
