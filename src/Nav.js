import './Nav.css';
import './Common.css';
import React, { Component } from 'react'
import { NavLink } from "react-router-dom";

class Nav extends Component {
  render() {
    var navObjs = [{
      "to": "/",
      "label": "Dashboard",
    }, {
      "to": "/postgresql",
      "label": "PostgreSql",
    }, {
      "to": "/elasticsearch",
      "label": "Elasticsearch",
    }, {
      "to": "/neo4j",
      "label": "Neo4j",
    }, {
      "to": "/mysql",
      "label": "MySQL",
    }, {
      "to": "/mongodb",
      "label": "MongoDB",
    }];

    const nav = [];
    for(const [index, ele] of navObjs.entries()) {
      nav.push(
        <li key={index}>
          <NavLink activeClassName="Background-Honey" exact to={ele.to}>{ele.label}</NavLink>
        </li>
      );
    }

    return (
      <nav className="Nav-Main">
        <ul>
          {nav}
        </ul>
      </nav>
    );
  }
}

export default Nav;
