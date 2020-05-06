import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import logo from './logo.svg';
import './App.css';
import { AboutPage } from './components/about.component';
import { DemoPage } from './components/demo.component';
import { HomePage } from './components/home.component';

function App() {
  return (
    <React.Fragment>
      <Router>
        <div className="App">
          <Link to="/about">About </Link>
          <Link to="/demo-page"> Demo</Link>
          <Link to="/"> Home</Link>
        </div>
        <Route path="/about">
          <AboutPage />
        </Route>
        <Route path="/demo-page">
          <DemoPage />
        </Route>
        <Route exact strict path="/">
          <HomePage />
        </Route>
      </Router>
    </React.Fragment>
  );
}

export default App;
