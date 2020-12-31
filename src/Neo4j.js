import React, { Component } from 'react'
import HoneyTable, { makeRelativeTime } from './HoneyTable.js'
import { endpoints } from './api.js'

class Neo4j extends Component {
  render() {
    return (
      <HoneyTable
        titleBefore="Neo4"
        titleHoney="Honey"
        titleAfter="!"
        fields={["Time", "Bytes"]}
        curRange={""}
        pagination={true}
        endpoint={endpoints.getBytesNeo4j}
        dataTransform={makeRelativeTime}
        style={{width: "1100px"}}
      />
    );
  }
}

export default Neo4j;
