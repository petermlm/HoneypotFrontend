import './TopConsumers.css';
import './Common.css';
import HoneyTable from './HoneyTable.js'
import { settings } from './settings.js'

class TopConsumers extends HoneyTable {
  render() {
    return (
      <HoneyTable
        titleBefore="Top&nbsp;"
        titleHoney="Consumers"
        titleAfter="!"
        fields={["CountryCode", "Count"]}
        endpoint={settings.endpointTopConsumers}
        style={this.props.style}
      />
    );
  }
}

export default TopConsumers;
