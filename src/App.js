import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';

import Navbar from './Navbar';
import Main from './Main';


class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Navbar/>
          <Main/>
        </div>
      </Router>
    );
  }
}

export default App;
