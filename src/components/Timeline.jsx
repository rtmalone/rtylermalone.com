import React, { useState } from "react";
import styles from "./styles/timeline.module.css";

export default function Timeline({careerData, setStep, step}) {
    const careerLength = careerData.length;
    const [translate, setTranslate] = useState(25);
    const dateList = careerData.map((item, i) => 
        <li><a href="#0" key={i} onClick={() => setStep(i)} className={`${styles.date} ${step >= i ? styles.dateSelected : ''}`}>{item.date}</a></li>
    );

    return (
        <section className={`${styles.timeline}`}>
            <div className={`${styles.timelineContainer} ${styles.container}`}>
                <div className={styles.dates}>
                    <div className={styles.line} style={{width: `${140 * careerLength}px`, transform: `translateX(-${translate}%)`}}>
                        <ol className={styles.dateList}>
                            {
                                dateList    
                            }
                        </ol>
                        <span className={styles.fillLine} style={{transform: `scaleX(${(step + 1) / (careerLength + 1)})`}} aria-hidden="true"></span>
                    </div>
                </div>

                <ul>
                    <li><a onClick={() => setTranslate(0)} href="#0" className={`${styles.textReplace} ${styles.nav} ${styles.navPrev} ${translate === 0 ? styles.navInactive : ''}`}>Prev</a></li>
                    <li><a onClick={() => setTranslate(25)} href="#0" className={`${styles.textReplace} ${styles.nav} ${styles.navNext} ${translate === 25 ? styles.navInactive : ''}`}>Next</a></li>
                </ul>
            </div>
        </section>
    )
 }