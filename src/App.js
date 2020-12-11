import './App.css';
import React, { Component } from 'react'
import ConnAttemps from './ConnAttemps.js';
import Map from './Map.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1 className="App-Title">Get some of that sweet&nbsp;<span id="App-Title-Honey">Honey</span>!</h1>
        <Map />
        <ConnAttemps />
      </div>
    );
  }

  // Map ref={this.mapElement}/
  // ConnAttemps ref={this.connAttempElement} /
}

export default App;
