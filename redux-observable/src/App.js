import React from 'react';
import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux';

function App(props) {
  console.log('6 - inside App.js  props = ', props );
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit Jay - Happy <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default connect(state => state.app )(App);