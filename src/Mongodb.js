import React, { Component } from 'react'
import HoneyTable, { makeRelativeTime } from './HoneyTable.js'
import { endpoints } from './api.js'

class Mongodb extends Component {
  render() {
    return (
      <HoneyTable
        titleBefore="Mongo"
        titleHoney="honey"
        titleAfter="!"
        fields={["Time", "Bytes"]}
        curRange={""}
        pagination={true}
        endpoint={endpoints.getBytesMongodb}
        dataTransform={makeRelativeTime}
        style={{width: "1100px"}}
      />
    );
  }
}

export default Mongodb;
