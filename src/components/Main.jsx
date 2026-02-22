import React, { useState, useRef, useEffect } from "react";
import styles from "./styles/main.module.css";
import profilePic from "../static/images/rtm_2019.jpg";
import Timeline from "./Timeline";
import { employmentHistory } from "../data/employment";

export default function Main() {
  const [activeJobId, setActiveJobId] = useState(null);
  const [activeJob, setActiveJob] = useState(null);
  const [showPersonalBio, setShowPersonalBio] = useState(true);
  const [expanded, setExpanded] = useState(false);
  const extendedRef = useRef(null);

  const handleYearClick = (jobId) => {
    setActiveJobId(jobId);
    const selectedJob = employmentHistory.find(job => job.id === jobId);
    setActiveJob(selectedJob);
    setShowPersonalBio(false);
    setExpanded(false);
  };

  const handleNameClick = () => {
    setShowPersonalBio(true);
    setActiveJobId(null);
    setExpanded(false);
  };

  return (
    <div className={styles.contentRow}>
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
          <div className={styles.bio}>
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
          <div className={styles.employment}>
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

            {activeJob.extendedDescription && (
              <>
                <div
                  className={`${styles.extendedDetails} ${expanded ? styles.extendedOpen : ""}`}
                  ref={extendedRef}
                  style={expanded ? { maxHeight: extendedRef.current?.scrollHeight + "px" } : {}}
                >
                  <p style={{ fontSize: "1em" }}>{activeJob.extendedDescription}</p>
                </div>
                <button
                  className={styles.tellMeMore}
                  onClick={() => setExpanded(!expanded)}
                >
                  {expanded ? "oh, that's nice" : "tell me more"}
                </button>
              </>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
