import './HoneyTable.css';
import './Common.css';
import React, { Component } from 'react'
import moment from 'moment'
import { AgGridColumn, AgGridReact } from 'ag-grid-react';
import { getCountryName } from './util.js'
import { makeUrlList } from './api.js'
import { settings } from './settings.js'

import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';

class HoneyTable extends Component {
  state = {
    data: []
  };

  componentDidMount() {
    this.loadData();
  }

  componentDidUpdate(prevProps) {
    if(this.props.curRange !== prevProps.curRange) {
      this.loadData();
    }
  }

  render() {
    const columns = [];
    var index = 0;
    this.props.fields.forEach(field => {
      columns.push(<AgGridColumn key={index} field={field}></AgGridColumn>)
      index++;
    });

    if(this.data) {
      var pagination = this.data.length > settings.PageSize;
    }

    return (
      <div className="HoneyTable" style={this.props.style}>
        <h2 className="HoneyTable-Title Text-Common">
          <span>{this.props.titleBefore}</span>
          <span className="Text-Honey">{this.props.titleHoney}</span>
          <span>{this.props.titleAfter}</span>
        </h2>
        <div className="HoneyTable-Data ag-theme-alpine grid-wrapper">
          <AgGridReact
            rowData={this.state.data}
            onGridReady={this.onGridReady}
            pagination={pagination}
            paginationPageSize={50}
          >
            {columns}
          </AgGridReact>
        </div>
      </div>
    );
  }

  onGridReady = (params) => {
    this.gridApi = params.api;
    this.gridApi.sizeColumnsToFit();
  }

  loadData = () => {
    if(this.props.endpoint === undefined) {
      return;
    }
    fetch(makeUrlList(this.props.endpoint, this.props.curRange))
      .then(res => res.json())
      .then((data) => {
        if(this.props.dataTransform) {
          var transforms = this.props.dataTransform;
          if(!Array.isArray(transforms)) {
            transforms = [this.props.dataTransform];
          }
          transforms.forEach(t => { data = t(data) });
        }
        this.setState({ data: data });
      })
      .catch(console.log)
  }
}

export default HoneyTable;

export function makeRelativeTime(data) {
  return data.map(entry => {
    entry.Time = moment(entry.Time).fromNow();
    return entry
  });
}

export function makeCountryName(data) {
  return data.map(entry => {
    entry.CountryName = getCountryName(entry.CountryCode);
    return entry
  });
}

export function makeTargetService(data) {
  var targetServicePorts = {
    "3306": "MySQL",
    "5432": "PostgreSQL",
    "7474": "Neo4j",
    "9200": "Elasticsearch",
    "27017": "MongoDB",
  };

  return data.map(entry => {
    var port = entry.Port;
    if(port in targetServicePorts) {
      entry.TargetService = targetServicePorts[port];
    } else {
      entry.TargetService = port;
    }
    return entry
  });
}
