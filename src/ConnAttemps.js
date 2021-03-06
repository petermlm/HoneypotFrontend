import './ConnAttemps.css';
import './Common.css';
import React from 'react';
import HoneyTable, { makeRelativeTime, makeCountryName, makeTargetService } from './HoneyTable.js'
import { endpoints } from './api.js'

class ConnAttemps extends HoneyTable {
  render() {
    return (
      <HoneyTable
        titleBefore="Latest&nbsp;"
        titleHoney="Honey"
        titleAfter="&nbsp;consumptions!"
        fields={["Time", "IP", "TargetService", "CountryName"]}
        curRange={this.props.curRange}
        pagination={true}
        endpoint={endpoints.connAttemps}
        dataTransform={[makeRelativeTime, makeCountryName, makeTargetService]}
        style={this.props.style}
      />
    );
  }
}

export default ConnAttemps;
