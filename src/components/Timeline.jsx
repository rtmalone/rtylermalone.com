import React from 'react';
import styles from './styles/timeline.module.css';
import { employmentHistory } from '../data/employment';

const Timeline = ({ activeJobId, onYearClick }) => {
  // Sort employment history by startYear in descending order (most recent first)
  const sortedHistory = [...employmentHistory].sort((a, b) => b.startYear - a.startYear);
  
  return (
    <div className={styles.timeline}>
      {sortedHistory.map((job) => (
        <div 
          key={job.id}
          className={`${styles.timelineNode} ${activeJobId === job.id ? styles.active : ''}`}
          onClick={() => onYearClick(job.id)}
        >
          <div className={styles.timelineYear}>{job.startYear}</div>
          <div className={styles.timelineDot}></div>
        </div>
      ))}
    </div>
  );
};

export default Timeline; 