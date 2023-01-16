import logo from './logo.svg';
import './App.css';
import React, { Component } from "react";
import { useState } from 'react';

export function replaceCamelWithSpaces(colorName) {
  return colorName.replace(/\B([A-Z])\B/g, " $1");
}

class App extends Component {
  constructor() {
    super();
    this.color = 'red';
    this.simpleClick = this.simpleClick.bind(this);
    this.state = {
      buttonColor: "MediumVioletRed",
      disabled:false
    }
  }
  simpleClick(){
    console.log('simpleClick');
    let boton1 = document.querySelector('input');
    boton1.style.backgroundColor = 'blue';
    this.color = 'blue';
  }
  render() {
    const newButtonColor =
    this.state.buttonColor === "MediumVioletRed" ? "MidnightBlue" : "MediumVioletRed";
    const inputText = 'texto1';
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
          <input style={{backgroundColor: this.color}} value={inputText} />
          <button onClick={() => {this.simpleClick();}}>Botón 1</button>
          <button disabled={this.state.disabled} style={{backgroundColor: this.state.disabled?'gray':this.state.buttonColor}}
            onClick={() => this.setState({ buttonColor: newButtonColor })}>Change to {replaceCamelWithSpaces(newButtonColor)}</button>
          <input
            id="disable-button-checkbox"
            defaultChecked={this.state.disabled}
            onChange={(e) => this.setState({ disabled: e.target.checked }) } 
            type="checkbox" />
            <label htmlFor="disable-button-checkbox">Disable button</label>
        </header>
      </div>
    );
  }
}

function App2() {
  const [ buttonColor, setButtonColor ] = useState('red');
  const newButtonColor = buttonColor === 'red' ? 'blue' : 'red';
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
        <button style={{backgroundColor: newButtonColor}}
            onClick={() => setButtonColor(buttonColor)}>
              Change to {newButtonColor}
            </button>
      </header>
    </div>
  );
}

export default App;
