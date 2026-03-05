import React, { useRef, useEffect, useState, useCallback } from 'react';
import styles from './styles/timeline.module.css';
import { employmentHistory } from '../data/employment';

const Timeline = ({ activeJobId, onYearClick }) => {
  const scrollRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);
  const [mounted, setMounted] = useState(false);

  const sortedHistory = [...employmentHistory].sort((a, b) => b.startYear - a.startYear);
  const maxYears = Math.max(...sortedHistory.map(j => j.employmentYears), 1);

  useEffect(() => {
    requestAnimationFrame(() => setMounted(true));
  }, []);

  const updateScrollState = useCallback(() => {
    const el = scrollRef.current;
    if (!el) return;
    if (window.innerWidth <= 768) {
      setCanScrollLeft(el.scrollLeft > 2);
      setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 2);
    }
  }, []);

  const selectAdjacent = useCallback((direction) => {
    const currentIndex = activeJobId
      ? sortedHistory.findIndex(job => job.id === activeJobId)
      : -1;
    const nextIndex = currentIndex === -1
      ? (direction === 1 ? 0 : sortedHistory.length - 1)
      : currentIndex + direction;
    if (nextIndex >= 0 && nextIndex < sortedHistory.length) {
      onYearClick(sortedHistory[nextIndex].id);
    }
  }, [activeJobId, sortedHistory, onYearClick]);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    updateScrollState();
    el.addEventListener('scroll', updateScrollState);
    window.addEventListener('resize', updateScrollState);
    return () => {
      el.removeEventListener('scroll', updateScrollState);
      window.removeEventListener('resize', updateScrollState);
    };
  }, [updateScrollState]);

  useEffect(() => {
    if (!activeJobId || !scrollRef.current) return;
    const activeNode = scrollRef.current.querySelector(`[data-job-id="${activeJobId}"]`);
    if (activeNode) {
      activeNode.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'nearest' });
    }
  }, [activeJobId]);

  return (
    <div className={styles.timelineWrapper}>
      <button
        className={`${styles.chevron} ${styles.chevronUp} ${!canScrollLeft ? styles.chevronHidden : ''}`}
        onClick={() => selectAdjacent(-1)}
        aria-label="Previous job"
        tabIndex={canScrollLeft ? 0 : -1}
      >
        <span className={styles.chevronIcon}>&#8249;</span>
      </button>

      <div className={styles.timeline} ref={scrollRef}>
        {sortedHistory.map((job, index) => {
          const tenurePct = Math.max(job.employmentYears, 0.4) / maxYears * 100;
          return (
            <div
              key={job.id}
              data-job-id={job.id}
              className={`${styles.entry} ${activeJobId === job.id ? styles.active : ''} ${mounted ? styles.entered : ''}`}
              style={{ '--stagger': `${index * 60}ms`, '--tenure': `${tenurePct}%` }}
              onClick={() => onYearClick(job.id)}
            >
              <div className={styles.entryInner}>
                <span className={styles.year}>{job.startYear}</span>
                <span className={styles.company}>{job.company}</span>
              </div>
              <div className={styles.tenureBar}>
                <div className={styles.tenureFill} />
              </div>
            </div>
          );
        })}
      </div>

      <button
        className={`${styles.chevron} ${styles.chevronDown} ${!canScrollRight ? styles.chevronHidden : ''}`}
        onClick={() => selectAdjacent(1)}
        aria-label="Next job"
        tabIndex={canScrollRight ? 0 : -1}
      >
        <span className={styles.chevronIcon}>&#8249;</span>
      </button>
    </div>
  );
};

export default Timeline;
