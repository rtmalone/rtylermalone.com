import React from 'react';

import './style.css';

const Temp = () => {
  return (
    <div className="temp">
      <h1>Tyler Malone</h1>
      <p className="short-bio">
        Tyler is a web engineer based in Chattanooga, TN specializing in React,
        Firebase, and Google Cloud Functions.
      </p>
      <span className="icons">
        <i className="rtm-github-squared" />
        <i className="rtm-linkedin-squared" />
        <i className="rtm-mail-squared" />
      </span>
    </div>
  );
};

export default Temp;
