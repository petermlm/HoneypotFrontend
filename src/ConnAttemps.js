import './ConnAttemps.css';
import './Common.css';
import React, { Component } from 'react'
import { AgGridColumn, AgGridReact } from 'ag-grid-react';
import moment from 'moment'
import { settings } from './settings.js'
import { makeUrl } from './util.js'

import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';

class ConnAttemps extends Component {
  state = {
    data: []
  };

  render() {
    return (
      <div className="ConnAttemps">
        <h2 className="Table-Title">Latest&nbsp;<span className="Text-Honey">Honey</span>&nbsp;consumptions!</h2>
        <div className="ConnAttemps-Table ag-theme-alpine" style={{width: 810, height: 400}}>
          <AgGridReact rowData={this.state.data}>
              <AgGridColumn field="Time"></AgGridColumn>
              <AgGridColumn field="IP"></AgGridColumn>
              <AgGridColumn field="Port"></AgGridColumn>
              <AgGridColumn field="CountryCode"></AgGridColumn>
          </AgGridReact>
        </div>
      </div>
    );
  }

  componentDidMount() {
    fetch(makeUrl(settings.endpointConnAttemps))
      .then(res => res.json())
      .then((data) => {
        data.forEach(entry => entry.Time = moment(entry.Time).fromNow());
        this.setState({ data: data });
      })
      .catch(console.log)
  }
}

export default ConnAttemps;
