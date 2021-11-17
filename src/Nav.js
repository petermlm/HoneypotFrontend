import './Nav.css';
import './Common.css';
import React, { Component } from 'react'
import { NavLink } from "react-router-dom";

class Nav extends Component {
  render() {
    var navObjs = [{
      "to": "/",
      "label": "Honey",
    }, {
      "to": "/premium",
      "label": "Premium",
    }, {
      "to": "/about",
      "label": "About",
    }];

    const nav = [];
    for(const [index, ele] of navObjs.entries()) {
      nav.push(
        <li key={index}>
          <NavLink activeClassName="Background-Honey Nav-Main-Active" exact to={ele.to}>{ele.label}</NavLink>
        </li>
      );
    }

    return (
      <nav className="Nav-Main">
        <ul className="Text-Common">
          {nav}
        </ul>
      </nav>
    );
  }
}

export default Nav;
