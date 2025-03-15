import React, { useState, useEffect } from "react";
import styles from "./styles/main.module.css";
import profilePic from "../static/images/rtm_2019.jpg";
import Timeline from "./Timeline";
import { employmentHistory } from "../data/employment";

export default function Main() {
  const [expand, setExpand] = useState(false);
  const [activeYear, setActiveYear] = useState(null);
  const [activeJob, setActiveJob] = useState(null);
  const [showPersonalBio, setShowPersonalBio] = useState(true);

  // Initialize with personal bio showing
  useEffect(() => {
    // Do not automatically select a job on initial load
    // Just keep the personal bio showing
  }, []);

  const handleYearClick = (year) => {
    setActiveYear(year);
    const selectedJob = employmentHistory.find(job => job.year === year);
    setActiveJob(selectedJob);
    setShowPersonalBio(false);
  };

  const handleNameClick = () => {
    setShowPersonalBio(true);
    setActiveYear(null);
  };

  return (
    <>
      <Timeline activeYear={activeYear} onYearClick={handleYearClick} />
      
      <div className={styles.main}>
        <div className={styles.heading}>
          <img
            className={styles.profilePic}
            src={profilePic}
            alt="Tyler Malone"
            onClick={handleNameClick}
          />
          <div className={styles.name} onClick={handleNameClick}>
            <h1>Tyler</h1>
            <h1>Malone</h1>
          </div>
        </div>
        
        <div
          className={`${styles.bio} ${expand ? styles.expand : styles.collapse}`}
        >
          {showPersonalBio ? (
            <>
              <p>
                Tyler is a software engineer based in Chattanooga, TN building solutions
                for Salesforce with Lightning Web Components & Apex at{" "}
                <a href="https://citiri.com">Citiri</a>.
              </p>
              <p style={{ fontSize: "1em" }}>
                Previously, Tyler has worked on teams developing UI for AI powered applications, a social platform for
                sport fans, a user powered broadcasting platform focused on sports,
                and web apps supporting an innovative, 12-lead ECG system.
                These various projects utilized React, Firebase, Google Cloud
                Functions, AngularJS, Express, and jQuery.
              </p>
            </>
          ) : activeJob && (
            <>
              <div className={styles.jobHeader}>
                <h2>{activeJob.company}</h2>
                <h3>{activeJob.title} • {activeJob.year}</h3>
                <div className={styles.techStack}>
                  {activeJob.stack.map((tech, index) => (
                    <span key={index} className={styles.techItem}>{tech}</span>
                  ))}
                </div>
              </div>
              <p>{activeJob.summary}</p>
              <p style={{ fontSize: "1em" }}>{activeJob.description}</p>
            </>
          )}
        </div>
        
        {showPersonalBio && (
          <small onClick={() => setExpand(!expand)}>
            {expand ? "Oh, that's nice." : "What else?"}
          </small>
        )}
      </div>
    </>
  );
}
