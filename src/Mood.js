import './Mood.css';
import './Common.css';
import React, { Component } from 'react'

class Mood extends Component {
  constructor(props) {
    super(props);
    this.player = document.getElementById('player');
  }

  mood = () => {
    this.player.currentTime = 0;
    if(this.player.paused) {
      this.player.play();
    } else {
      this.player.pause();
    }
  }

  render() {
    return (
      <p className="Mood Text-Common" onClick={this.mood}>get in the&nbsp;<span className="Text-Honey">mood</span></p>
    );
  }
}

export default Mood;
