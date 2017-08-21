import React from 'react';

const Summary = () => {
  return (
    <div className="summary">
      <div className="content">
        <h1>Tyler Malone</h1>
        <p className="short-bio">
          Tyler is a web engineer based in Chattanooga, TN specializing in
          React, Firebase, and Google Cloud Functions.
        </p>
        <span className="icons">
          <i className="rtm-github-squared" />
          <i className="rtm-linkedin-squared" />
          <i className="rtm-mail-squared" />
        </span>
        <Link to="/">Projects</Link>
        <Link to="/about">About</Link>
        <Link to="/blog">Blog</Link>
        <div className="education">
          <h4>EDUCATION</h4>
          <ul>
            <li>B.A. Digital Media</li>
            <li>Nashville Software School</li>
          </ul>
        </div>
      </div>
      <img className="mountains" src={mountains} alt="mountains" />
    </div>
  );
};
