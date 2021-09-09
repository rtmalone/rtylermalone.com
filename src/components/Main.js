import React, { useState } from "react";
import styles from "./styles/main.module.css";
import profilePic from "../static/images/rtm_2019.jpg";

export default function Temp() {
  const [expand, setExpand] = useState(false);

  return (
    <div className={styles.main}>
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
      <div
        className={`${styles.bio} ${expand ? styles.expand : styles.collapse}`}
      >
        <p>
          Tyler is a web engineer based in Chattanooga, TN building solutions
          for Salesforce with Lightning Web Components, Angular & Apex at{" "}
          <a href="https://codescience.com">CodeScience</a>.
        </p>
        <p style={{ fontSize: "1em" }}>
          Previously, Tyler has worked on teams developing UI for AI powered applications, a social platform for
          sport fans, a user powered broadcasting platform focused on sports,
          and web apps supporting an innovative, 12-lead ECG system.
          These various projects utilized React, Firebase, Google Cloud
          Functions, AngularJS, Express, and jQuery.
        </p>
      </div>
      <small onClick={() => setExpand(!expand)}>
        {expand ? "Oh, that's nice." : "What else?"}
      </small>
    </div>
  );
}
