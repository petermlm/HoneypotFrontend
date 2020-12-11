import './App.css';
import React, { Component } from 'react'
import ConnAttemps from './ConnAttemps.js';
import Map from './Map.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Map />
        <ConnAttemps />
      </div>
    );
  }

  // Map ref={this.mapElement}/
  // ConnAttemps ref={this.connAttempElement} /
}

export default App;
