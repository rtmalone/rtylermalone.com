import React from "react";
import styles from "./styles/footer.module.css";
import EmailIcon from "../static/icons/icon-email.svg?react";
import GithubIcon from "../static/icons/icon-github.svg?react";
import LinkedIn from "../static/icons/icon-linkedin.svg?react";
import MediumIcon from "../static/icons/icon-medium.svg?react";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <ul className={styles.nav}>
        <li>
          <a className={styles.footerLink} href="mailto:rtylermalon@gmail.com">
            <EmailIcon />
          </a>
        </li>
        <li>
          <a
            className={styles.footerLink}
            href="https://linkedin.com/in/rtylermalone"
          >
            <LinkedIn />
          </a>
        </li>
        <li>
          <a className={styles.footerLink} href="https://github.com/rtmalone">
            <GithubIcon />
          </a>
        </li>
        <li>
          <a
            className={styles.footerLink}
            href="https://medium.com/@tylermalone"
          >
            <MediumIcon />
          </a>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
