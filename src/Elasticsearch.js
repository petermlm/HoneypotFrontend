import React, { Component } from 'react'
import HoneyTable, { makeRelativeTime } from './HoneyTable.js'
import { endpoints } from './api.js'

class Elasticsearch extends Component {
  render() {
    return (
      <HoneyTable
        titleBefore="Elastic"
        titleHoney="honey"
        titleAfter="!"
        fields={["Time", "Bytes"]}
        curRange={""}
        pagination={true}
        endpoint={endpoints.getBytesElasticsearch}
        dataTransform={makeRelativeTime}
        style={{width: "1100px"}}
      />
    );
  }
}

export default Elasticsearch;
