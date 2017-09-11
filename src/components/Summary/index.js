import React from 'react';
import { Link } from 'react-router-dom';
import { Header, Icon } from 'semantic-ui-react';
import mountains from './mountains.svg';

import './styles.css';

class Summary extends React.Component {
  aboutClick = () => {
    console.log('about');
    import('../About')
      .then(module => {
        console.log(module);
      })
      .catch(err => {
        console.log(err);
      });
  };

  render() {
    return (
      <div className="summary">
        <div className="content">
          <Link to="/">
            <Header as="h1" inverted>
              Tyler Malone
            </Header>
          </Link>
          <p className="short-bio">
            Tyler is a web engineer based in Chattanooga, TN specializing in
            React, Firebase, and Google Cloud Functions.
          </p>
          <span className="icons">
            <i className="rtm-github-squared" />
            <i className="rtm-linkedin-squared" />
            <i className="rtm-mail-squared" />
          </span>
          <nav>
            <Link to="/">Projects</Link>
            <Link to="/about" onClick={this.aboutClick}>
              About
            </Link>
            <Link to="/blog">Blog</Link>
          </nav>
          <div className="education">
            <Header as="h4" inverted>
              EDUCATION
            </Header>
            <ul>
              <li>B.A. Digital Media</li>
              <li>Nashville Software School</li>
            </ul>
          </div>
        </div>
        <img className="mountains" src={mountains} alt="mountains" />
      </div>
    );
  }
}

export default Summary;
