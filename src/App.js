import './App.css';
import './Common.css';
import React, { Component } from 'react'
import { BrowserRouter, Switch, Route } from "react-router-dom";
import countries from 'i18n-iso-countries'
import Nav from './Nav.js'
import Dashboard from './Dashboard.js'
import Postgresql from './Postgresql.js'
import Elasticsearch from './Elasticsearch.js'
import Footer from './Footer.js';

class App extends Component {
  constructor(props) {
    super(props);
    countries.registerLocale(require("i18n-iso-countries/langs/en.json"));
  }

  render() {
    return (
      <BrowserRouter basename="/melgera">
        <div className="App">
          <Nav />
          <Switch>
            <Route path="/postgresql" component={Postgresql} />
            <Route path="/elasticsearch" component={Elasticsearch} />
            <Route path="/" component={Dashboard} />
          </Switch>
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
