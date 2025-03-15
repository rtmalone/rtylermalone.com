import React, { useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./routes";
import Footer from "./components/Footer";
import ThemePicker from "./components/ThemePicker";
import { setTheme } from "./utils/setTheme";
import { getMonth } from "./utils/getMonth";

import styles from "./app.module.css";
import { seasonalThemes } from "./theme";

function App() {
  useEffect(() => {
    const month = getMonth();
    setTheme(seasonalThemes[month]);
  }, []);

  return (
    <BrowserRouter>
      <div className={styles.app}>
        <ThemePicker currentSeason={null} />
        <AppRoutes />
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
