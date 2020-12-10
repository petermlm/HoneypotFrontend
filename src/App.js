import './App.css';
import React, { Component } from 'react'
import { settings } from './settings.js'
import ConnAttemps from './ConnAttemps.js';
import Map from './Map.js';

class App extends Component {
  state = {
    contacts: []
  };

  constructor(props) {
    super(props);
    this.mapElement = React.createRef();
    this.connAttempElement = React.createRef();
  }

  render() {
    return (
      <div className="App">
        <Map ref={this.mapElement}/>
        <ConnAttemps ref={this.connAttempElement} />
      </div>
    );
  }

  componentDidMount() {
    fetch(settings.endpoint)
      .then(res => res.json())
      .then((data) => {
        this.setState({ contacts: data });
        this.mapElement.current.setData(data);
        this.connAttempElement.current.setData(data);
      })
      .catch(console.log)
  }
}

export default App;
