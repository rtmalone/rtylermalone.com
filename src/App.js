import React, { Component } from "react";
import { BrowserRouter } from "react-router-dom";
import Routes from "./routes";
import { Footer } from "./components";

import styles from "./app.module.css";

const App = () => {
  return (
    <BrowserRouter>
      <div className={styles.app}>
        <Footer />
        <Routes />
      </div>
    </BrowserRouter>
  );
};

export default App;
