import React from "react";

import styles from "./temp.module.css";
import profilePic from "../../static/images/profile-pic.jpg";

const Temp = () => {
  return (
    <div className={styles.temp}>
      <h1>Tyler Malone</h1>
      <p className={styles.shortBio}>
        Tyler is a web engineer based in Chattanooga, TN building
        <br />
        solutions for AI with React and React Native at{" "}
        <a href="https://pylon.com">Pylon ai</a>
      </p>
      <img className={styles.profilePic} src={profilePic} alt="Tyler Malone" />
    </div>
  );
};

export default Temp;
