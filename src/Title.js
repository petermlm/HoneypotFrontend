import './Title.css';
import './Common.css';
import React, { Component } from 'react'
import { makeUrl } from './util.js'
import { settings } from './settings.js'

class Title extends Component {
  state = {
    count: 0,
  };

  render() {
    return (
      <h1 className="Title Text-Common">Sweet&nbsp;<span className="Text-Honey">Honey</span>&nbsp;as been served a total of {this.state.count} times!</h1>
    );
  }

  componentDidMount() {
    fetch(makeUrl(settings.endpointTotalConsumptions))
      .then(res => res.json())
      .then((data) => {
        var count = data["Count"];
        this.setState({ count: count });
      })
      .catch(console.log)
  }
}

export default Title;
