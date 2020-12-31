import React, { Component } from 'react'
import HoneyTable, { makeRelativeTime } from './HoneyTable.js'
import { endpoints } from './api.js'

class Mysql extends Component {
  render() {
    return (
      <HoneyTable
        titleBefore="My"
        titleHoney="honey"
        titleAfter="!"
        fields={["Time", "Bytes"]}
        curRange={""}
        pagination={true}
        endpoint={endpoints.getBytesMysql}
        dataTransform={makeRelativeTime}
        style={{width: "1100px"}}
      />
    );
  }
}

export default Mysql;
