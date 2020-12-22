import './App.css';
import './Common.css';
import React, { Component } from 'react'
import countries from 'i18n-iso-countries'
import Mood from './Mood.js';
import Title from './Title.js';
import Map from './Map.js';
import Buttons from './Buttons.js';
import ConnAttemps from './ConnAttemps.js';
import TopConsumers from './TopConsumers.js';
import TopFlavours from './TopFlavours.js';
import Footer from './Footer.js';
import { Ranges } from './Ranges';

class App extends Component {
  constructor(props) {
    super(props);
    countries.registerLocale(require("i18n-iso-countries/langs/en.json"));
    this.state = {
      curRange: Ranges.Month,
    };
  }

  rangeChanged = (newRange) => {
    this.setState({curRange: newRange});
  }

  render() {
    return (
      <div className="App">
        <Title />
        <Mood />
        <Map curRange={this.state.curRange} />
        <Buttons initRange={this.state.curRange} rangeChanged={this.rangeChanged} />
        <ConnAttemps curRange={this.state.curRange} style={{width: "1100px"}} />
        <div className="App-TopConsumers-TopFlavors">
          <TopConsumers curRange={this.state.curRange} style={{width: "468px"}} />
          <TopFlavours curRange={this.state.curRange} style={{width: "468px"}} />
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
