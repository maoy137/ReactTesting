import React from 'react';
import {
  BrowserRouter as Router,
} from 'react-router-dom';
// import styled from 'styled-components';
import logo from '~~static/logo.svg';
import './App.css';
import { Routes } from '~~routes';
import Authentication from '../Authentication';

const App = () => (
  <div className="App">
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <p>WiDemo</p>
    </header>
    <Router>
      <Authentication>
        <Routes />
      </Authentication>
    </Router>
  </div>
);

export default App;
