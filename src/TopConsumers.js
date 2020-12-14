import './TopConsumers.css';
import './Common.css';
import React, { Component } from 'react'
import { AgGridColumn, AgGridReact } from 'ag-grid-react';
import { settings } from './settings.js'
import { makeUrl } from './util.js'

class TopConsumers extends Component {
  state = {
    data: []
  };

  render() {
    return (
      <div className="TopConsumers Table-Common">
        <h2 className="Table-Title">Top&nbsp;<span className="Text-Honey">Consumers</span>!</h2>
        <div className="TopConsumers-Table ag-theme-alpine" style={{width: 450, height: 400}}>
          <AgGridReact rowData={this.state.data}>
              <AgGridColumn field="CountryCode"></AgGridColumn>
              <AgGridColumn field="Count"></AgGridColumn>
          </AgGridReact>
        </div>
      </div>
    )
  }

  componentDidMount() {
    fetch(makeUrl(settings.endpointTopConsumers))
      .then(res => res.json())
      .then((data) => {
        this.setState({ data: data });
      })
      .catch(console.log)
  }
}

export default TopConsumers;
