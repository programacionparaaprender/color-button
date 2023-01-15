import logo from './logo.svg';
import './App.css';
import React, { Component } from "react";

class App extends Component {
  render() {
    const inputText = 'texto1'
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          <input style={{backgroundColor: 'red'}} value={inputText} />
        </header>
      </div>
    );
  }
}

function App2() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <input style={{backgroundColor: 'red'}} value="texto1" />
      </header>
    </div>
  );
}

export default App;
