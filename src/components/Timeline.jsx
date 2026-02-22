import React, { useRef, useEffect, useState, useCallback } from 'react';
import styles from './styles/timeline.module.css';
import { employmentHistory } from '../data/employment';

const Timeline = ({ activeJobId, onYearClick }) => {
  const scrollRef = useRef(null);
  const [canScrollUp, setCanScrollUp] = useState(false);
  const [canScrollDown, setCanScrollDown] = useState(false);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

  const sortedHistory = [...employmentHistory].sort((a, b) => b.startYear - a.startYear);

  const updateScrollState = useCallback(() => {
    const el = scrollRef.current;
    if (!el) return;

    const isHorizontal = window.innerWidth <= 768;
    if (isHorizontal) {
      setCanScrollLeft(el.scrollLeft > 2);
      setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 2);
      setCanScrollUp(false);
      setCanScrollDown(false);
    } else {
      setCanScrollUp(el.scrollTop > 2);
      setCanScrollDown(el.scrollTop < el.scrollHeight - el.clientHeight - 2);
      setCanScrollLeft(false);
      setCanScrollRight(false);
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

  const currentIndex = activeJobId ? sortedHistory.findIndex(j => j.id === activeJobId) : -1;
  const showUp = canScrollUp || currentIndex > 0;
  const showDown = canScrollDown || currentIndex === -1 || currentIndex < sortedHistory.length - 1;

  return (
    <div className={styles.timelineWrapper}>
      <button
        className={`${styles.chevron} ${styles.chevronUp} ${!showUp ? styles.chevronHidden : ''}`}
        onClick={() => selectAdjacent(-1)}
        aria-label="Previous job"
        tabIndex={showUp ? 0 : -1}
      >
        <span className={styles.chevronIcon}>&#8249;</span>
      </button>
      <div className={styles.timeline} ref={scrollRef}>
        {sortedHistory.map((job) => (
          <div
            key={job.id}
            data-job-id={job.id}
            className={`${styles.timelineNode} ${activeJobId === job.id ? styles.active : ''}`}
            onClick={() => onYearClick(job.id)}
          >
            <span className={styles.timelineYear}>{job.startYear}</span>
          </div>
        ))}
      </div>
      <button
        className={`${styles.chevron} ${styles.chevronDown} ${!showDown ? styles.chevronHidden : ''}`}
        onClick={() => selectAdjacent(1)}
        aria-label="Next job"
        tabIndex={showDown ? 0 : -1}
      >
        <span className={styles.chevronIcon}>&#8249;</span>
      </button>
    </div>
  );
};

export default Timeline;
