import React from "react";

import styles from "./temp.module.css";
import profilePic from "../../static/images/profile-pic.jpg";

const Temp = () => {
  return (
    <div className={styles.temp}>
      <div className={styles.heading}>
        <img
          className={styles.profilePic}
          src={profilePic}
          alt="Tyler Malone"
        />
        <div>
          <h1>Tyler</h1>
          <h1>Malone</h1>
        </div>
      </div>
      <p className={styles.shortBio}>
        Tyler is a web engineer based in Chattanooga, TN building
        <br />
        solutions for AI with React and React Native at{" "}
        <a href="https://pylon.com">Pylon ai</a>
      </p>
    </div>
  );
};

export default Temp;
