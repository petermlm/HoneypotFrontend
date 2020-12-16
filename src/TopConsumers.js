import './TopConsumers.css';
import './Common.css';
import HoneyTable from './HoneyTable.js'
import { settings } from './settings.js'
import { getCountryName } from './util.js'

class TopConsumers extends HoneyTable {
  render() {
    return (
      <HoneyTable
        titleBefore="Top&nbsp;"
        titleHoney="Consumers"
        titleAfter="!"
        fields={["CountryName", "Count"]}
        endpoint={settings.endpointTopConsumers}
        dataTransform={this.dataTransform}
        style={this.props.style}
      />
    );
  }

  dataTransform = function(data) {
    var dataTransformed = []
    data.forEach(entry => {
      entry.CountryName = getCountryName(entry.CountryCode);
      dataTransformed.push(entry);
    });
    return dataTransformed
  }
}

export default TopConsumers;
