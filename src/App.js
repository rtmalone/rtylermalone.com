import React, { PureComponent } from "react";
import { BrowserRouter } from "react-router-dom";
import Routes from "./routes";
import Footer from "./components/Footer";
import ThemePicker from "./components/ThemePicker";
import { setTheme } from "./utils/setTheme";
import { getMonth } from "./utils/getMonth";

import styles from "./app.module.css";
import { seasonalThemes } from "./theme";

class App extends PureComponent {
  state = {
    currentSeason: null
  };
  componentDidMount() {
    const month = getMonth();
    setTheme(seasonalThemes[month]);
  }

  render() {
    return (
      <BrowserRouter>
        <div className={styles.app}>
          <ThemePicker currentSeason={this.state.currentSeason} />
          <Routes />
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
