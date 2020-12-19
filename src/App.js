import './App.css';
import './Common.css';
import React, { Component } from 'react'
import countries from 'i18n-iso-countries'
import Mood from './Mood.js';
import Title from './Title.js';
import Map from './Map.js';
import ConnAttemps from './ConnAttemps.js';
import TopConsumers from './TopConsumers.js';
import TopFlavours from './TopFlavours.js';
import Footer from './Footer.js';

class App extends Component {
  constructor(props) {
    super(props);
    countries.registerLocale(require("i18n-iso-countries/langs/en.json"));
  }

  render() {
    return (
      <div className="App">
        <Title />
        <Mood />
        <Map />
        <ConnAttemps style={{width: "1100px"}} />
        <div className="App-TopConsumers-TopFlavors">
          <TopConsumers style={{width: "468px"}} />
          <TopFlavours style={{width: "468px"}} />
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
