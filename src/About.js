import './About.css';
import './Common.css';
import React, { Component } from 'react'

class About extends Component {
  render() {
    return (
      <div className="About">
        <p>This is the Frontend of a <a href="https://en.wikipedia.org/wiki/Honeypot_(computing)">honeypot</a> project created <a href="https://pedromelgueira.com/">by me</a>.</p>
        <p>This honeypot listens to the ports of some databases and registers theip that made the request and also the fist few bytes that are sent with the request.</p>
        <p>The honeypot will then assign a country code to the request, and this is displayed on the map in the main page.</p>
      </div>
    );
  }
}

export default About;
