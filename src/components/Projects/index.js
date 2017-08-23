import React from 'react';
import { Link, Route } from 'react-router-dom';

import './styles.css';

class Projects extends React.Component {
  render() {
    return (
      <div className="projects">
        <nav>
          <ProjectNavLink to="/" whenExact={true} label="Professional" />
          <ProjectNavLink to="/projects/personal" label="Personal" />
        </nav>
        <Route exact path="/" render={() => <p>career stuff</p>} />
        <Route path="/projects/personal" render={() => <p>personal stuff</p>} />
      </div>
    );
  }
}

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
