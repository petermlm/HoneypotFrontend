import React, { Component } from 'react'
import HoneyTable, { makeRelativeTime } from './HoneyTable.js'
import { endpoints } from './api.js'

class Premium extends Component {
  render() {
    return (
      <div>
        <h1 className="Title Text-Common">Our&nbsp;<span className="Text-Honey">Premium</span>&nbsp;Selection!</h1>
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
        <h2 className="Title Text-Common">More to come&nbsp;<span className="Text-Honey">Soon</span>?</h2>
      </div>
    );
  }
}

export default Premium;
