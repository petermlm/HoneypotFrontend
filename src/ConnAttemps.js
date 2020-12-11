import './ConnAttemps.css';
import React, { Component } from 'react'
import { AgGridColumn, AgGridReact } from 'ag-grid-react';
import { settings } from './settings.js'

import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';

class ConnAttemps extends Component {
  state = {
    data: []
  };

  // setData = (data) => {
  //   this.setState({data: data});
  // };

  render() {
    return (
      <div className="ConnAttemps">
        <div className="ag-theme-alpine" style={{width: 810, height: 400}}>
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
    fetch(settings.endpointConnAttemps)
      .then(res => res.json())
      .then((data) => {
        this.setState({ data: data });
      })
      .catch(console.log)
  }
}

export default ConnAttemps;
