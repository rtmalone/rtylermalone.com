import React from "react";
import styles from "./footer.module.css";
import { ReactComponent as EmailIcon } from "../../static/icons/icon-email.svg";
import { ReactComponent as GithubIcon } from "../../static/icons/icon-github.svg";
import { ReactComponent as LinkedIn } from "../../static/icons/icon-linkedin.svg";
import { ReactComponent as MediumIcon } from "../../static/icons/icon-medium.svg";

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
            href="https://linkedin.com/rtylermalone"
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
