import React from 'react';
import { Route } from 'react-router-dom';

import Projects from './components/Projects';
import About from './components/About';
import Bio from './components/Bio';

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
