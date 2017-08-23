import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Routes from './routes';
import Summary from './components/Summary';

import './App.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Summary />
          <Routes />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
