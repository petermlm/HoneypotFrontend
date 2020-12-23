import './TopConsumers.css';
import './Common.css';
import HoneyTable, { makeCountryName } from './HoneyTable.js'
import { endpoints } from './api.js'

class TopConsumers extends HoneyTable {
  render() {
    return (
      <HoneyTable
        titleBefore="Top&nbsp;"
        titleHoney="Consumers"
        titleAfter="!"
        fields={["CountryName", "Count"]}
        curRange={this.props.curRange}
        pagination={false}
        endpoint={endpoints.topConsumers}
        dataTransform={makeCountryName}
        style={this.props.style}
      />
    );
  }
}

export default TopConsumers;
