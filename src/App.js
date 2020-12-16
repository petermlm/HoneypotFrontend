import './App.css';
import './Common.css';
import React, { Component } from 'react'
import Mood from './Mood.js';
import Map from './Map.js';
import ConnAttemps from './ConnAttemps.js';
import TopConsumers from './TopConsumers.js';
import TopFlavours from './TopFlavours.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1 className="App-Title Text-Common">Get some of that sweet&nbsp;<span className="Text-Honey">Honey</span>!</h1>
        <Mood />
        <Map />
        <ConnAttemps style={{width: "1100px"}} />
        <div className="App-TopConsumers-TopFlavors">
          <TopConsumers style={{width: "468px"}} />
          <TopFlavours style={{width: "468px"}} />
        </div>
      </div>
    );
  }
}

export default App;
