import React, { Component } from 'react';
import { Link, BrowserRouter } from 'react-router-dom';
import Routes from './routes';

import mountains from './mountains.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Routes />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
