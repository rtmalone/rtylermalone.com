import React, { useState, useEffect } from "react";
import styles from "./styles/main.module.css";
import profilePic from "../static/images/rtm_2019.jpg";
import Timeline from "./Timeline";
import { employmentHistory } from "../data/employment";

export default function Main() {
  const [expand, setExpand] = useState(false);
  const [activeJobId, setActiveJobId] = useState(null);
  const [activeJob, setActiveJob] = useState(null);
  const [showPersonalBio, setShowPersonalBio] = useState(true);

  // Initialize with personal bio showing
  useEffect(() => {
    // Do not automatically select a job on initial load
    // Just keep the personal bio showing
  }, []);

  const handleYearClick = (jobId) => {
    setActiveJobId(jobId);
    const selectedJob = employmentHistory.find(job => job.id === jobId);
    setActiveJob(selectedJob);
    setShowPersonalBio(false);
  };

  const handleNameClick = () => {
    setShowPersonalBio(true);
    setActiveJobId(null);
  };

  return (
    <>
      <Timeline activeJobId={activeJobId} onYearClick={handleYearClick} />
      
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
        
          {showPersonalBio ? (
            <div
              className={styles.bio}
            >
              <p>
                Tyler is a software engineer based in Chattanooga, TN building solutions
                for critical infrastructure management and experimenting with Agentic Coding at{" "}
                <a href="https://citiri.com">Citiri</a>.
              </p>
              <p style={{ fontSize: "1em", marginBottom: "0" }}>
              Previously, Tyler has worked on teams creating software solutions for Salesforce ISVs,
              UI for AI powered applications, a social platform for sport fans, and web apps supporting an innovative, 12-lead ECG system.
              Tyler also devotes time to his local community serving as a Den Leader for Cub Scouts
              and Vice President of the <a href="https://www.barnardastronomy.org/">Barnard Astronomical Society</a>.
              </p>
            </div>
          ) : activeJob && (
            <div
              className={styles.employment}
            >
              <div className={styles.jobHeader}>
                <h2>{activeJob.company}</h2>
                <h4>{activeJob.title} • {activeJob.startYear}{activeJob.employmentYears > 1 ? ` - ${activeJob.startYear + activeJob.employmentYears}` : ""}</h4>
                <div className={styles.techStack}>
                  {activeJob.stack.map((tech, index) => (
                    <span key={index} className={styles.techItem}>{tech}</span>
                  ))}
                </div>
              </div>
              <p>{activeJob.summary}</p>
              <p style={{ fontSize: "1em" }}>{activeJob.description}</p>
            </div>
          )}
        </div>
    </>
  );
}
