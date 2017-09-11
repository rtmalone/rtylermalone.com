import React from 'react';
import { Link, Route } from 'react-router-dom';
import { Tab } from 'semantic-ui-react';

import './styles.css';
const panes = [
  {
    menuItem: 'Professional',
    render: () => <p>Tab 1 Content</p>
  },
  {
    menuItem: 'Personal',
    render: () => <p>Tab 2 Content</p>
  }
];

const Projects = () => {
  return (
    <div className="projects">
      <nav>
        <Tab
          style={{ color: 'red' }}
          menu={{
            secondary: true,
            pointing: true,
            text: true,
            style: { color: 'red' }
          }}
          panes={panes}
        />
        {/* <ProjectNavLink to="/" whenExact={true} label="Professional" />
          <ProjectNavLink to="/projects/personal" label="Personal" /> */}
      </nav>
      {/* <Route exact path="/" render={() => <p>career stuff</p>} />
        <Route path="/projects/personal" render={() => <p>personal stuff</p>} /> */}
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
