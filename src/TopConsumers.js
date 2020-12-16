import './TopConsumers.css';
import './Common.css';
import HoneyTable, { makeCountryName } from './HoneyTable.js'
import { settings } from './settings.js'

class TopConsumers extends HoneyTable {
  render() {
    return (
      <HoneyTable
        titleBefore="Top&nbsp;"
        titleHoney="Consumers"
        titleAfter="!"
        fields={["CountryName", "Count"]}
        endpoint={settings.endpointTopConsumers}
        dataTransform={makeCountryName}
        style={this.props.style}
      />
    );
  }
}

export default TopConsumers;
