import React, { useState } from "react";
import Timeline from "./Timeline";
import Utilities from "../utils/Utilities";
import styles from "./styles/main.module.css";
import profilePic from "../static/images/rtm_2019.jpg";
import json from "../utils/data.json";

export default function Temp() {
  const careerData = json.data;
  const [expand, setExpand] = useState(false);
  const [step, setStep] = useState(careerData.length - 1);
  const tech = Utilities.setCopy(careerData[step]);

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
      <Timeline setStep={setStep} step={step} careerData={careerData}/>
      <div
        className={`${styles.bio} ${expand ? styles.expand : styles.collapse}`}
      >
        <p>Tyler is a {careerData[step].title} based in {careerData[step].city}, {careerData[step].state} building {careerData[step].platform} with {tech} at{" "}
          <a href={careerData[step].companyURL}>{careerData[step].company}</a>.
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
