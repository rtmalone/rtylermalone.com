import React, { Component } from "react";
import { BrowserRouter } from "react-router-dom";
import Routes from "./routes";
import { Footer } from "./components";

import styles from "./app.module.css";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className={styles.app}>
          <Routes />
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
