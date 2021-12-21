import './Mood.css';
import './Common.css';
import React, { Component } from 'react'

class Mood extends Component {
  state = {
    playing: false,
  };

  constructor(props) {
    super(props);
    this.player = document.getElementById('player');
  }

  mood = () => {
    this.player.currentTime = 0;
    if(!this.state.playing) {
      this.player.play();
    } else {
      this.player.pause();
    }
    this.setState({ playing: !this.state.playing });
  }

  text = () => {
    if(this.player.paused) {
      return (
        <span>get in the&nbsp;<span className="Text-Honey">mood</span></span>
      )
    }
    return (
      <span>stop the&nbsp;<span className="Text-Honey">mood</span></span>
    )
  }

  render() {
    return (
      <p className="Mood Text-Common" onClick={this.mood}>{this.text()}</p>
    );
  }
}

export default Mood;
