import React from 'react';
import { Route } from 'react-router-dom';

import AsyncComponent from './components/AsyncComponent';

const Projects = AsyncComponent(() => import('./components/Projects'));
const About = AsyncComponent(() => import('./components/About'));
const Bio = AsyncComponent(() => import('./components/Bio'));

const Routes = () => {
  return (
    <div className="main">
      <Route path="/" component={Projects} />
      <Route path="/projects/professional" component={Projects} />
      <Route path="/projects/personal" component={Projects} />
      <Route exact path="/about" component={About} />
      <Route exact path="/bio" component={Bio} />
    </div>
  );
};

export default Routes;
