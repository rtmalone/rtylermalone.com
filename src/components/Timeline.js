import React from 'react';
import styles from './styles/timeline.module.css';
import { employmentHistory } from '../data/employment';

const Timeline = ({ activeYear, onYearClick }) => {
  // Sort employment history by year in descending order (most recent first)
  const sortedHistory = [...employmentHistory].sort((a, b) => b.year - a.year);
  
  return (
    <div className={styles.timeline}>
      {sortedHistory.map((job) => (
        <div 
          key={job.id}
          className={`${styles.timelineNode} ${activeYear === job.year ? styles.active : ''}`}
          onClick={() => onYearClick(job.year)}
        >
          <div className={styles.timelineYear}>{job.year}</div>
          <div className={styles.timelineDot}></div>
        </div>
      ))}
    </div>
  );
};

export default Timeline; 