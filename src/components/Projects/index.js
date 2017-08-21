import React from 'react';
import { Link, Route } from 'react-router-dom';

import './Projects.css';

const Projects = () => {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <ProjectNavLink to="/" whenExact={true} label="Professional" />
          </li>
          <li>
            <ProjectNavLink to="/projects/personal" label="Personal" />
          </li>
        </ul>
      </nav>
      <Route exact path="/" render={() => <p>career stuff</p>} />
      <Route path="/projects/personal" render={() => <p>personal stuff</p>} />
    </div>
  );
};

const ProjectNavLink = ({ label, to, whenExact }) => {
  return (
    <Route
      exact={whenExact}
      path={to}
      children={({ match }) =>
        <div className={match ? 'active' : ''}>
          <Link to={to}>
            {label}
          </Link>
        </div>}
    />
  );
};

export default Projects;
