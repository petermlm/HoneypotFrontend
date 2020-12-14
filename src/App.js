import './App.css';
import './Common.css';
import React, { Component } from 'react'
import ConnAttemps from './ConnAttemps.js';
import Map from './Map.js';

class App extends Component {
  mood = () => {
    var player = document.getElementById('player');
    if(player.paused) {
      player.play();
    } else {
      player.pause();
    }
  }

  render() {
    return (
      <div className="App">
        <h1 className="App-Title">Get some of that sweet&nbsp;<span className="Text-Honey">Honey</span>!</h1>
        <p className="App-Mood"><a href="#" onClick={this.mood}>get in the&nbsp;<span className="App-Honey">mood</span></a></p>
        <Map />
        <ConnAttemps />
      </div>
    );
  }

  // Map ref={this.mapElement}/
  // ConnAttemps ref={this.connAttempElement} /
}

export default App;
