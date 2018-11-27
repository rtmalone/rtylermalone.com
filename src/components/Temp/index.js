import React from "react";

import styles from "./temp.module.css";

const Temp = () => {
  return (
    <div className={styles.temp}>
      <h1>Tyler Malone</h1>
      <p className={styles.shortBio}>
        Tyler is a web engineer based in Chattanooga, TN specializing in React,
        Firebase, and Google Cloud Functions.
      </p>
      <span className={styles.icons}>
        <i className="rtm-github-squared" />
        <i className="rtm-linkedin-squared" />
        <i className="rtm-mail-squared" />
      </span>
    </div>
  );
};

export default Temp;
