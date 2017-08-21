import React from 'react';
import { Route } from 'react-router-dom';

import Projects from './components/Projects';

const Routes = () => {
  return (
    <div className="main">
      <Route to="/" exact component={Projects} />
    </div>
  );
};

export default Routes;
