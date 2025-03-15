import React, { useState, useEffect } from "react";
import { setTheme } from "../utils/setTheme";
import { getMonth } from "../utils/getMonth";
import { seasonalThemes } from "../theme";
import styles from "./styles/themePicker.module.css";

export default function ThemePicker() {
  const [season, setSeason] = useState(getMonth());
  
  // Set initial theme when component mounts
  useEffect(() => {
    const initialSeason = getMonth();
    setSeason(initialSeason);
    setTheme(seasonalThemes[initialSeason] || seasonalThemes.default);
  }, []);
  
  const handleThemeChange = (selectedSeason) => {
    setSeason(selectedSeason);
    setTheme(seasonalThemes[selectedSeason]);
  };
  
  return (
    <ul className={styles.themePicker}>
      <li
        className={season === "spring" ? styles.active : ""}
        onClick={() => handleThemeChange("spring")}
      >
        Spring
      </li>
      <li
        className={season === "summer" ? styles.active : ""}
        onClick={() => handleThemeChange("summer")}
      >
        Summer
      </li>
      <li
        className={season === "autumn" ? styles.active : ""}
        onClick={() => handleThemeChange("autumn")}
      >
        Autumn
      </li>
      <li
        className={season === "winter" ? styles.active : ""}
        onClick={() => handleThemeChange("winter")}
      >
        Winter
      </li>
    </ul>
  );
}
