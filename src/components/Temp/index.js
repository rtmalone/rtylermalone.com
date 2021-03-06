import React from "react";

import styles from "./temp.module.css";
import profilePic from "../../static/images/rtm_2019.jpg";

class Temp extends React.PureComponent {
  state = {
    expand: false
  };

  toggle = () => {
    this.setState(prevState => {
      return { expand: !prevState.expand };
    });
  };

  render() {
    const { expand } = this.state;
    return (
      <div className={styles.temp}>
        <div className={styles.heading}>
          <img
            className={styles.profilePic}
            src={profilePic}
            alt="Tyler Malone"
          />
          <div>
            <h1>Tyler</h1>
            <h1>Malone</h1>
          </div>
        </div>
        <div
          className={`${styles.bio} ${
            expand ? styles.expand : styles.collapse
          }`}
        >
          <p>
            Tyler is a web engineer based in Chattanooga, TN building solutions
            for AI with React, React Native, TypeScript & GraphQL at{" "}
            <a href="https://spokestack.io">Spokestack</a> - formerly known as
            Pylon.
          </p>
          <p style={{ fontSize: "1em" }}>
            Previously, Tyler has worked on teams developing a social platform
            for sport fans, a user powered broadcasting platform focused on
            sports, and web apps supporting an innovative, hand held, 12-lead
            ECG system. These various projects utilized React, Firebase, Google
            Cloud Functions, AngularJS, Express, and jQuery.
          </p>
        </div>
        <small onClick={this.toggle}>
          {expand ? "Oh, that's nice." : "What else?"}
        </small>
      </div>
    );
  }
}

export default Temp;
