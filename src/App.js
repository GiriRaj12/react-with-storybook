import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom"
import Dashboard from './Components/Dashboard.js';
import SidebarContent from './Components/SidebarContent';
import { faChartBar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="app-header">
        </header>
        <nav className="side-bar">
          <div className="side-bar-me">
            <SidebarContent renderIcon={<FontAwesomeIcon
              icon={faChartBar} />} content="Dashboard" toRe="/dashboard" />
          </div>
        </nav>
        <Switch>
          <Route path="/dashboard">
            <Dashboard></Dashboard>
          </Route>
          <Route path="/">
            <Dashboard></Dashboard>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
