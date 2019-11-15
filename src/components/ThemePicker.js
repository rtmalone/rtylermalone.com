import React, { useState } from "react";
import { setTheme } from "../utils/setTheme";
import { getMonth } from "../utils/getMonth";
import { seasonalThemes } from "../theme";
import styles from "./styles/themePicker.module.css";

export default function ThemePicker() {
  const [season, setSeason] = useState(getMonth());
  return (
    <ul className={styles.themePicker}>
      <li
        className={season === "spring" ? styles.active : ""}
        onClick={() => {
          setSeason("spring");
          setTheme(seasonalThemes["spring"]);
        }}
      >
        Spring
      </li>
      <li
        className={season === "summer" ? styles.active : ""}
        onClick={() => {
          setSeason("summer");
          setTheme(seasonalThemes["summer"]);
        }}
      >
        Summer
      </li>
      <li
        className={season === "autumn" ? styles.active : ""}
        onClick={() => {
          setSeason("autumn");
          setTheme(seasonalThemes["autumn"]);
        }}
      >
        Autumn
      </li>
      <li
        className={season === "winter" ? styles.active : ""}
        onClick={() => {
          setSeason("winter");
          setTheme(seasonalThemes["winter"]);
        }}
      >
        Winter
      </li>
    </ul>
  );
}
