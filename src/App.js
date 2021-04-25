import './App.css';
import './Common.css';
import React, { Component } from 'react'
import { BrowserRouter, Switch, Route } from "react-router-dom";
import countries from 'i18n-iso-countries'
import Nav from './Nav.js'
import Dashboard from './Dashboard.js'
import Elasticsearch from './Elasticsearch.js'
import Footer from './Footer.js';

class App extends Component {
  constructor(props) {
    super(props);
    countries.registerLocale(require("i18n-iso-countries/langs/en.json"));
  }

  render() {
    return (
      <BrowserRouter basename="/honey">
        <div className="App">
          <Nav />
          <Switch>
            {
              // TODO: Display more specific tables one day
              // Display more specific tables one day
              // <Route path="/postgresql" component={Postgresql} />
              // <Route path="/neo4j" component={Neo4j} />
              // <Route path="/mysql" component={Mysql} />
              // <Route path="/mongodb" component={MongoDB} />
            }
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
