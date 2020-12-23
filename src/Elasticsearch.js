import './Elasticsearch.css';
import React, { Component } from 'react'
import HoneyTable, { makeRelativeTime } from './HoneyTable.js'
import { endpoints } from './api.js'

class Elasticsearch extends Component {
  render() {
    return (
      <HoneyTable
        titleBefore="Elastic&nbsp;"
        titleHoney="Honey"
        titleAfter="!"
        fields={["Time", "Bytes"]}
        curRange={""}
        pagination={true}
        endpoint={endpoints.getBytes}
        dataTransform={makeRelativeTime}
        style={{width: "1100px"}}
      />
    );
  }
}

export default Elasticsearch;
