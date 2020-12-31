import React, { Component } from 'react'
import HoneyTable, { makeRelativeTime } from './HoneyTable.js'
import { endpoints } from './api.js'

class Postgresql extends Component {
  render() {
    return (
      <HoneyTable
        titleBefore="Post"
        titleHoney="honey"
        titleAfter="!"
        fields={["Time", "Bytes"]}
        curRange={""}
        pagination={true}
        endpoint={endpoints.getBytesPostgresql}
        dataTransform={makeRelativeTime}
        style={{width: "1100px"}}
      />
    );
  }
}

export default Postgresql;
